<script setup lang="ts">
import { getTour } from '@/entities/tour/api/tour.api';
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
		text: data.value?.seaType ?? '',
		textOnTitle: false
	},
	{
		iconName: 'umbrella',
		title: 'Тип пляжа',
		text: data.value?.additionalInfo?.beach?.type ?? '',
		textOnTitle: false
	},
	{
		iconName: 'footprints',
		title: 'Расстояние до моря',
		text: data.value?.additionalInfo?.beach?.distanceMinutes
			? `Примерно ${data.value?.additionalInfo?.beach?.distanceMinutes} мин.`
			: '',
		textOnTitle: false
	},
	{
		iconName: 'calendar-clock',
		title: 'Заселение / Выселение ',
		text:
			data.value?.additionalInfo?.checkInOut.checkIn &&
			data.value?.additionalInfo?.checkInOut.checkOut
				? `Заселение с ${data.value?.additionalInfo?.checkInOut.checkIn} / Выселение до ${data.value?.additionalInfo?.checkInOut.checkOut}`
				: '',
		textOnTitle: false
	},
	{
		iconName: 'utensils-crossed',
		title: 'Питание',
		text: data.value?.additionalInfo?.food?.type ?? '',
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
	<div class="grid w-full grid-cols-1 gap-4 bg-white pb-4 dark:bg-gray-800">
		<!-- HEADER -->
		<div
			class="max-w-container relative top-[-36px] z-10 order-2 mb-[-36px] rounded-t-3xl bg-inherit pt-4 md:static md:order-1 md:mb-0"
		>
			<FeaturesTitleWithDownloadFile
				:title="tourTitle"
				:file-name="data?.name ?? ''"
				:filenames="data?.fileName"
			/>
		</div>

		<!-- IMAGES -->
		<ClientOnly>
			<template #fallback>
				<div class="md:max-w-container order-1 md:order-2">
					<div class="h-[350px] bg-neutral-300 md:h-[500px] md:rounded-xl" />
				</div>
			</template>
			<div class="md:max-w-container order-1 md:order-2">
				<FeaturesGalleryOrSlider :images="data?.images" />
			</div>
		</ClientOnly>

		<!-- CONTENT -->
		<div class="max-w-container order-3 grid gap-6 md:grid-flow-col">
			<div class="order-2 flex flex-col gap-4 md:order-1">
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
							class="base-link"
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

				<SharedAlertsBaseAlert
					icon-name="circle-alert"
					mode="warning"
				>
					<SharedFontsText variant="body-md">
						УВАЖАЕМЫЕ ТУРИСТЫ! ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, ВО МНОГИХ ОТЕЛЯХ
						ДИНАМИЧЕСКОЕ ЦЕНООБРАЗОВАНИЕ, ПЕРЕД БРОНИРОВАНИЕМ, ПОЖАЛУЙСТА,
						УТОЧНИТЕ АКТУАЛЬНЫЙ ПРАЙС. НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ! КОНСУЛЬТАЦИЯ
						И БРОНИРОВАНИЕ:
						<a
							href="tel:+74862780958"
							class="base-link"
						>
							+7(4862)78-09-58
						</a>
					</SharedFontsText>
				</SharedAlertsBaseAlert>

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
				<div class="sticky top-20 z-10 flex flex-col gap-5">
					<FeaturesOrderWithInfo
						:price="data?.minPrice"
						:info-values="orderInfoValues"
						@click-order="toggleModal"
					/>
				</div>
			</div>
		</div>

		<!-- ADDITIONAL -->
		<div class="max-w-container order-4">
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
