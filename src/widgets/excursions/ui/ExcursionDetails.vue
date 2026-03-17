<script setup lang="ts">
import { getExcursion } from '@/entities/excursion/api/excursion.api';
import { OrderModal } from '@/features/modals';
import { donwloadFile } from '@/shared/lib/download/useLinkDownloadFile';

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
	<div class="w-full dark:bg-gray-800">
		<div
			class="max-w-container flex w-full flex-col gap-5 py-10 dark:bg-gray-800"
		>
			<div
				class="w-full mb-4 flex flex-col items-end justify-between gap-y-2 sm:flex-row sm:gap-y-0"
			>
				<SharedFontsHeading
					variant="display-lg"
					weight="bold"
				>
					{{ data?.name }}
				</SharedFontsHeading>
				<button
					v-if="data?.fileName?.length && data?.fileName[0]"
					type="button"
					class="min-h-14 w-full min-w-40 rounded-xl bg-secondary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-secondary-500/95 md:w-52"
					@click.prevent="donwloadFile(data?.fileName[0], data.name)"
				>
					Скачать прайс
				</button>
			</div>

			<SharedGalleryBaseGallery
				v-if="data?.images"
				:images="data.images"
			/>

			<div class="grid gap-6 md:grid-flow-col">
				<div class="order-2 flex flex-col gap-4 md:order-1">
					<SharedFontsHeading
						class="mb-2"
						variant="heading-xl"
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

			<hr class="m-y-3 w-full bg-neutral-200" >

			<EntitiesConditionsBlock
				:included="data?.thePriceIncludes"
				:excluded="data?.additionallyPaid"
				included-title="Включено"
				excluded-title="Оплачивается отдельно"
				title="Условия тура"
			/>

			<hr class="m-y-3 w-full bg-neutral-200" >
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
