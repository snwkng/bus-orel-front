<script setup lang="ts">
import { getTour } from '@/entities/tour/api/tour.api';
import { donwloadFile } from '@/shared/lib/download/useLinkDownloadFile';
import { OrderModal } from '@/features/modals';

const { $modals } = useNuxtApp();

const toggleModal = () => {
	$modals.open(OrderModal);
};

const route = useRoute();

const tourId = computed(() => route.params.id as string);

const { data, error } = await getTour(tourId);

const tourTitle = computed(() =>
	data.value?.type || data.value?.name
		? `${data.value?.type} ${data.value?.name}`
		: ''
);

const orderInfoValues = computed(() => [
	{
		iconName: 'map-pin',
		title: 'Адрес',
		text: data.value?.address?.fullAddress ?? '',
		textOnTitle: false
	},
	{
		iconName: 'waves',
		title: 'Море',
		text: data.value?.additionalInfo?.beach?.type ?? '',
		textOnTitle: false
	},
	{
		iconName: 'footprints',
		title: 'Расстояние до моря',
		text: `Примерно ${data.value?.additionalInfo?.beach?.distanceMinutes ?? ''} мин.`,
		textOnTitle: false
	},
	{
		iconName: 'calendar-clock',
		title: 'Заселение / Выселение',
		text: `Заселение с ${data.value?.additionalInfo?.checkInOut.checkIn} / Выселение до ${data.value?.additionalInfo?.checkInOut.checkOut}`,
		textOnTitle: false
	},
	{
		iconName: 'utensils-crossed',
		title: 'Питание',
		text: `${data.value?.additionalInfo?.food?.included ?? ''} / ${data.value?.additionalInfo?.food?.type ?? ''}`,
		textOnTitle: false
	}
]);

const hasRoomsinfo = computed(() => data.value?.tours?.some((x) => x.roomName));

if (error.value) {
	throw createError({
		status: error.value?.statusCode,
		statusMessage: error.value?.message || error.value?.statusMessage,
		fatal: true
	});
}

useSeoMeta({
	title: computed(
		() => `Автобусный тур в ${data.value?.address?.city}, ${tourTitle.value}`
	),
	ogTitle: () =>
		`Автобусный тур в ${data.value?.address?.city}, ${tourTitle.value}`,
	description: () => `Автобусный тур в ${data.value?.address?.city} из Орла.`,
	ogDescription: () => `Автобусный тур в ${data.value?.address?.city} из Орла.`
});
</script>
<template>
	<div class="w-full dark:bg-gray-800">
		<div
			class="max-w-container flex w-full flex-col gap-5 py-10 dark:bg-gray-800"
		>
			<div
				class="w-fulll mb-4 flex flex-col items-end justify-between gap-y-2 sm:flex-row sm:gap-y-0"
			>
				<SharedFontsHeading
					variant="display-lg"
					weight="bold"
				>
					{{ tourTitle }}
				</SharedFontsHeading>
				<button
					v-if="data?.fileName?.length && data?.fileName[0]"
					type="button"
					class="min-h-14 w-full min-w-40 rounded-xl bg-secondary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-secondary-500/95 md:w-52"
					@click.prevent="donwloadFile(data?.fileName[0], data?.name)"
				>
					Скачать прайс
				</button>
			</div>
			<SharedGalleryBaseGallery :images="data?.images ?? []" />

			<!-- CONTENT -->
			<div class="grid gap-6 md:grid-flow-col">
				<div class="order-2 flex flex-col gap-4 md:order-1">
					<SharedFontsHeading
						class="mb-2"
						variant="heading-md"
					>
						Описание
					</SharedFontsHeading>
					<SharedFontsText
						variant="body-lg"
						weight="regular"
					>
						{{ data?.description }}
					</SharedFontsText>

					<hr />

					<SharedFontsHeading
						class="mb-2"
						variant="heading-md"
					>
						Размещение
					</SharedFontsHeading>
					<div v-if="hasRoomsinfo">
						<div
							v-for="(room, roomIndex) in data?.tours"
							:key="roomIndex"
						>
							<div class="py-2 dark:text-slate-200">
								<strong> {{ room?.roomName }}: </strong>
								{{ room?.description }}
							</div>
						</div>
					</div>
					<LazySharedInformersEmptyDataInformer
						v-else
						text="Данных о номерах пока нет"
					/>

					<hr />
				</div>

				<div class="order-1 min-h-20 w-full md:order-2 md:w-96">
					<SharedAlertsBaseAlert
						v-if="data?.registryNumber"
						icon-name="badge-check"
						mode="success"
						class="mb-5"
					>
						<SharedFontsText variant="body-md">
							Объект прошёл классификацию. Реестровый номер
							{{ data.registryNumber }}
							<a
								class="link"
								href="https://tourism.fsa.gov.ru/ru/resorts/showcase/hotels"
								target="_blank"
								rel="noopener noreferrer nofollow"
								aria-label="в едином реестре объектов классификации в сфере туристской индустрии"
							>
								в едином реестре объектов классификации в сфере туристской
								индустрии
							</a>
						</SharedFontsText>
					</SharedAlertsBaseAlert>

					<div class="sticky top-20 z-10 flex flex-col gap-5">
						<SharedAlertsBaseAlert
							icon-name="circle-alert"
							mode="warning"
						>
							<SharedFontsText variant="body-md">
								УВАЖАЕМЫЕ ТУРИСТЫ! ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, ВО МНОГИХ ОТЕЛЯХ
								ДИНАМИЧЕСКОЕ ЦЕНООБРАЗОВАНИЕ, ПЕРЕД БРОНИРОВАНИЕМ, ПОЖАЛУЙСТА,
								УТОЧНИТЕ АКТУАЛЬНЫЙ ПРАЙС. НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ!
								КОНСУЛЬТАЦИЯ И БРОНИРОВАНИЕ:
								<a
									href="tel:+74862780958"
									class="base-link"
								>
									+7(4862)78-09-58
								</a>
							</SharedFontsText>
						</SharedAlertsBaseAlert>

						<FeaturesOrderWithInfo
							:price="data?.minPrice"
							:info-values="orderInfoValues"
							@click-order="toggleModal"
						/>
					</div>
				</div>
			</div>

			<EntitiesConditionsBlock
				v-if="data?.includedInThePrice?.length"
				:included="data?.includedInThePrice?.map((x) => x?.serviceName)"
				included-title="Включено"
				title="В Стоимость входит"
			/>

			<div
				v-if="data?.tours?.length"
				class=""
			>
				<SharedFontsHeading
					class="mb-2"
					variant="heading-md"
				>
					Даты и цены
				</SharedFontsHeading>
				<SharedTableBusTourTable :tours="data.tours" />
			</div>
		</div>
	</div>
</template>
