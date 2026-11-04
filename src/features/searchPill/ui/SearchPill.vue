<script setup lang="ts">
import {
	getExcursionsCitiesList,
	getExcursionsTypesList
} from '@/entities/excursion/api/excursion.api';
import {
	getToursCitiesList,
	getToursSeaList
} from '@/entities/tour/api/tour.api';

type SearchTab = 'tour' | 'excursion';

interface IProps {
	/** Фиксированный тип поиска без табов (для страниц списков) */
	type?: SearchTab;
}

const props = withDefaults(defineProps<IProps>(), {
	type: undefined
});

const emit = defineEmits<{
	'update:tab': [tab: SearchTab];
}>();

const router = useRouter();
const route = useRoute();

const queryParam = (key: string): string => {
	const value = route.query[key];
	return typeof value === 'string' ? value : '';
};

const activeTab = ref<SearchTab>(props.type ?? 'tour');

const tabs: { id: SearchTab; label: string }[] = [
	{ id: 'tour', label: 'Туры к морю' },
	{ id: 'excursion', label: 'Экскурсии' }
];

const tabsRef = useTemplateRef('tabsEl');
const indicator = ref({ left: 0, width: 0 });

const updateIndicator = async (): Promise<void> => {
	await nextTick();
	const el = tabsRef.value?.querySelector<HTMLElement>(
		`[data-tab="${activeTab.value}"]`
	);
	if (el) {
		indicator.value = { left: el.offsetLeft, width: el.offsetWidth };
	}
};

watch(activeTab, (tab) => {
	emit('update:tab', tab);
	updateIndicator();
});

onMounted(() => {
	updateIndicator();
	globalThis.addEventListener('resize', updateIndicator);
});

onBeforeUnmount(() => {
	globalThis.removeEventListener('resize', updateIndicator);
});

const { data: tourSeaList } = await getToursSeaList();
const { data: excursionCitiesList } = await getExcursionsCitiesList();
const { data: excursionTypesList } = await getExcursionsTypesList();

const queryItem = (key: string): SelectItem | null => {
	const name = queryParam(key);
	return name ? ({ name } as SelectItem) : null;
};

const selectedSea = ref<SelectItem | null>(queryItem('seaType'));
const { data: tourCitiesList } = await getToursCitiesList(selectedSea);

const isTourTab = activeTab.value === 'tour';
const selectedTourCity = ref<SelectItem | null>(
	isTourTab ? queryItem('city') : null
);
const selectedExcursionCity = ref<SelectItem | null>(
	isTourTab ? null : queryItem('city')
);
const selectedExcursionType = ref<SelectItem | null>(queryItem('type'));

watch(tourCitiesList, (val) => {
	const isValid = val?.some(
		(c) => c.name?.toLowerCase() === selectedTourCity.value?.name?.toLowerCase()
	);
	if (!isValid) {
		selectedTourCity.value = null;
	}
});

const submit = (): void => {
	if (activeTab.value === 'excursion') {
		router.push({
			name: 'excursions',
			query: {
				city: selectedExcursionCity.value?.name || undefined,
				type: selectedExcursionType.value?.name || undefined
			}
		});
	} else {
		router.push({
			name: 'bus-tours',
			query: {
				seaType: selectedSea.value?.name || undefined,
				city: selectedTourCity.value?.name || undefined
			}
		});
	}
};
</script>

<template>
	<div class="max-w-[720px]">
		<div
			v-if="!type"
			ref="tabsEl"
			class="relative mb-3 inline-flex rounded-full border border-neutral-200 bg-neutral-100 p-1"
		>
			<span
				class="absolute top-1 bottom-1 rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
				:style="{ left: `${indicator.left}px`, width: `${indicator.width}px` }"
				aria-hidden="true"
			/>
			<button
				v-for="tab in tabs"
				:key="tab.id"
				type="button"
				:data-tab="tab.id"
				class="typo-button relative z-10 rounded-full px-4 py-1.5 transition-colors duration-300"
				:class="
					activeTab === tab.id
						? 'text-neutral-900'
						: 'text-neutral-500 hover:text-neutral-900'
				"
				@click="activeTab = tab.id"
			>
				{{ tab.label }}
			</button>
		</div>

		<form
			class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:flex-row md:items-stretch md:gap-0 md:rounded-full"
			@submit.prevent="submit"
		>
			<div
				class="flex min-w-0 flex-1 flex-col justify-center rounded-2xl px-4 py-2 md:rounded-full"
			>
				<span class="typo-caption font-semibold text-neutral-500">Откуда</span>
				<span class="typo-small truncate font-medium">Орёл</span>
			</div>

			<div
				class="hidden w-px shrink-0 bg-neutral-200 md:my-2 md:block"
				aria-hidden="true"
			/>

			<SharedFormsDropdownSelect
				v-if="activeTab === 'tour'"
				v-model="selectedSea"
				label="Море"
				any-label="Любое"
				:list="tourSeaList ?? []"
			/>

			<div
				v-if="activeTab === 'tour'"
				class="hidden w-px shrink-0 bg-neutral-200 md:my-2 md:block"
				aria-hidden="true"
			/>

			<SharedFormsDropdownSelect
				v-if="activeTab === 'tour'"
				v-model="selectedTourCity"
				label="Куда"
				any-label="Любой город"
				:list="tourCitiesList ?? []"
			/>
			<SharedFormsDropdownSelect
				v-else
				v-model="selectedExcursionCity"
				label="Куда"
				any-label="Любой город"
				:list="excursionCitiesList ?? []"
			/>

			<template v-if="activeTab === 'excursion'">
				<div
					class="hidden w-px shrink-0 bg-neutral-200 md:my-2 md:block"
					aria-hidden="true"
				/>

				<SharedFormsDropdownSelect
					v-model="selectedExcursionType"
					label="Тип экскурсии"
					any-label="Любой"
					:list="excursionTypesList ?? []"
				/>
			</template>

			<button
				type="submit"
				class="bg-primary-500 hover:bg-primary-600 typo-button flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-white transition-all active:scale-95"
			>
				<Icon
					name="lucide:search"
					class="size-4"
				/>
				Найти
			</button>
		</form>
	</div>
</template>
