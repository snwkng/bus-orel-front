<script setup lang="ts">
import { getExcursionsCitiesList } from '@/entities/excursion/api/excursion.api';
import {
	getToursCitiesList,
	getToursSeaList
} from '@/entities/tour/api/tour.api';

interface IProps {
	type: 'tour' | 'excursion';
}

const props = defineProps<IProps>();

const router = useRouter();
const route = useRoute();

const { data: tourSeaList } = await getToursSeaList();

const selectedSea = ref(
	tourSeaList.value?.find(
		(s) =>
			s.name?.toLowerCase() === (route.query.seaType as string)?.toLowerCase()
	) || ({} as SelectItem)
);

const { data: excursionCitiesList } = await getExcursionsCitiesList();
const { data: tourCitiesList } = await getToursCitiesList(selectedSea);

watch(
	() => tourCitiesList.value,
	(val) => {
		const isValid = val?.some(
			(c) =>
				c.name?.toLowerCase() === selectedTourCity.value.name?.toLowerCase()
		);
		if (!isValid) {
			selectedTourCity.value = {} as SelectItem;
		}
	}
);

const selectedExcursionCity = ref(
	excursionCitiesList.value?.find(
		(s) => s.name?.toLowerCase() === (route.query.city as string)?.toLowerCase()
	) || ({} as SelectItem)
);
const selectedTourCity = ref(
	tourCitiesList.value?.find(
		(c) => c.name?.toLowerCase() === (route.query.city as string)?.toLowerCase()
	) || ({} as SelectItem)
);

const goToSearchPage = () => {
	if (props.type === 'excursion') {
		router.push({
			name: 'excursions',
			query: { city: selectedExcursionCity.value.name }
		});
	} else {
		router.push({
			name: 'bus-tours',
			query: {
				seaType: selectedSea.value?.name,
				city: selectedTourCity.value?.name
			}
		});
	}
};
</script>

<template>
	<form
		class="flex w-full flex-row flex-wrap items-center justify-center gap-x-[2px]"
	>
		<SharedLayoutsSelectGroup>
			<SharedFormsTheInput
				disabled
				input-id="откуда"
				type="text"
				label="Откуда"
				placeholder="Орёл"
			/>
			<SharedFormsBaseSelect
				v-if="type === 'tour'"
				v-model="selectedSea"
				label="Море"
				:list="tourSeaList"
			/>
			<SharedFormsBaseSelect
				v-if="type === 'tour'"
				v-model="selectedTourCity"
				:list="tourCitiesList"
				label="Куда"
			/>
			<SharedFormsBaseSelect
				v-else
				v-model="selectedExcursionCity"
				label="Куда"
				:list="excursionCitiesList"
			/>
		</SharedLayoutsSelectGroup>
		<SharedButtonsTheButton
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="goToSearchPage"
		/>
	</form>
</template>
