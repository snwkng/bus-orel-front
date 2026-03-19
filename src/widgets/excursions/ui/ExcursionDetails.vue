<script setup lang="ts">
import { getExcursion } from '@/entities/excursion/api/excursion.api';
import { OrderModal } from '@/features/modals';

const { $modals } = useNuxtApp();

const toggleModal = () => {
	$modals.open(OrderModal);
};

const route = useRoute();

const dayjs = useDayjs();

const excursionId = computed(() => route.params.id as string);

const { data, error } = await getExcursion(excursionId);

const orderInfoValues = computed(() => [
	{
		iconName: 'map-pin',
		title: 'Город(-а)',
		text: data.value?.cities?.join(', ') ?? '',
		textOnTitle: false
	},
	{
		iconName: 'clock-fading',
		title: 'Длительность',
		text: endWordDayCheck.value,
		textOnTitle: false
	},
	{
		iconName: 'calendar-days',
		title: 'Даты предстоящих экскурсий',
		text: dates.value,
		textOnTitle: false
	}
]);

const endWordDayCheck = computed(() => {
	if (data.value?.duration) {
		if (data.value?.duration === 1) {
			return `${data.value.duration} день`;
		} else if (data.value.duration > 1 && data.value.duration < 5) {
			return `${data.value.duration} дня`;
		} else {
			return `${data.value.duration} дней`;
		}
	} else {
		return '';
	}
});

const dates = computed(
	() =>
		data.value?.excursionStartDates
			?.map((date) => dayjs(date).format('DD.MM.YYYY'))
			?.join(', ') ?? ''
);

// перекидываем на 404, если бэк выловил невалидный id
if (error.value) {
	throw createError({
		status: error.value?.statusCode,
		message: error.value?.message || error.value?.statusMessage,
		fatal: true
	});
}

useSeoMeta({
	title: computed(() => data.value?.name),
	description: () =>
		`Экскурсия - ${data.value?.name}, Автобусный тур в ${data.value?.cities?.join(', ')} из Орла.`,
	ogDescription: () =>
		`Экскурсия - ${data.value?.name}, Автобусный тур в ${data.value?.cities?.join(', ')} из Орла.`
});
</script>
<template>
	<div class="grid w-full grid-cols-1 gap-y-4 bg-white pb-4 dark:bg-gray-800">
		<!-- HEADER -->
		<div
			class="max-w-container relative top-[-36px] z-10 order-2 mb-[-36px] rounded-t-3xl bg-inherit pt-4 md:static md:order-1 md:mb-0"
		>
			<FeaturesTitleWithDownloadFile
				:title="data?.name ?? ''"
				:file-name="data?.name ?? ''"
				:filenames="data?.fileName"
			/>
		</div>

		<!-- IMAGES -->
		<ClientOnly>
			<template #fallback>
				<div class="h-[350px] md:h-[500px] bg-neutral-300 md:max-w-container order-1 md:order-2"  />
			</template>
			<div class="md:max-w-container order-1 md:order-2">
				<FeaturesGalleryOrSlider :images="data?.images" />
			</div>
		</ClientOnly>

		<div class="max-w-container order-3 grid gap-6 md:grid-flow-col">
			<div class="order-2 flex flex-col gap-4 md:order-1">
				<SharedFontsHeading
					class="mb-2"
					variant="heading-md"
				>
					Программа тура
				</SharedFontsHeading>
				<div
					v-for="(dayContent, index) in data?.description"
					:key="index"
					class="mb-8 flex"
				>
					<EntitiesExcursionDayContent
						:day="index + 1"
						:text="dayContent"
					/>
				</div>
			</div>

			<div class="order-1 w-full md:order-2 md:w-96">
				<div class="sticky top-20">
					<FeaturesOrderWithInfo
						:price="data?.price"
						:info-values="orderInfoValues"
						@click-order="toggleModal"
					/>
				</div>
			</div>
		</div>

		<div class="max-w-container order-4 grid grid-cols-1 gap-y-4">
			<hr class="m-y-3 w-full bg-neutral-200" />

			<EntitiesConditionsBlock
				:included="data?.thePriceIncludes"
				:excluded="data?.additionallyPaid"
				included-title="Включено"
				excluded-title="Оплачивается отдельно"
				title="Условия тура"
			/>

			<hr class="m-y-3 w-full bg-neutral-200" />

			<SharedFontsText variant="body-lg">
				Компания организатор оставляет за собой право вносить некоторые
				изменения в программу тура без уменьшения общего объема и качества
				услуг, в том числе предоставлять замену отеля на равнозначный. Компания
				организатор не несет ответственности за задержки, возникшие в результате
				пробок на дорогах, в случае тяжелой дорожной ситуации возможны поздние
				приезды в отели, объекты экскурсий. В случае особых непредвиденных
				ситуаций возможны изменения в порядке проведения экскурсий, объем
				программы при этом не меняется.
			</SharedFontsText>
		</div>
	</div>
</template>
