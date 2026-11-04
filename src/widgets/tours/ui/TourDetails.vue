<script setup lang="ts">
import { getTour } from '@/entities/tour/api/tour.api';

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

const hasRoomsInfo = computed(() => data.value?.tours?.some((x) => x.roomName));

const contactMode = ref<'booking' | 'question' | null>(null);

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
	<section class="mx-auto w-full max-w-[1200px] px-6 pt-8 pb-16">
		<!-- Breadcrumbs -->
		<nav
			class="typo-small mb-5 flex items-center gap-1.5 text-neutral-500"
			aria-label="Хлебные крошки"
		>
			<NuxtLink
				:to="{ name: 'index' }"
				class="transition-colors hover:text-neutral-900"
				>Главная</NuxtLink
			>
			<Icon
				name="lucide:chevron-right"
				class="size-3.5"
			/>
			<NuxtLink
				:to="{ name: 'bus-tours' }"
				class="transition-colors hover:text-neutral-900"
				>Туры к морю</NuxtLink
			>
			<Icon
				name="lucide:chevron-right"
				class="size-3.5"
			/>
			<span class="truncate text-neutral-900">{{ tourTitle }}</span>
		</nav>

		<!-- Title -->
		<div class="mb-6">
			<FeaturesTitleWithDownloadFile
				:title="tourTitle"
				:file-name="data?.name ?? ''"
				:filenames="data?.fileName"
			/>
			<p
				v-if="data?.address?.fullAddress"
				class="typo-small mt-2 flex items-center gap-1.5 text-neutral-500"
			>
				<Icon
					name="lucide:map-pin"
					class="text-secondary-600 size-4"
				/>
				{{ data.address.fullAddress }}
			</p>
		</div>

		<!-- Gallery -->
		<FeaturesGalleryOrSlider
			:images="data?.images"
			:alt="tourTitle"
			icon="lucide:palmtree"
			class="mb-10"
		/>

		<div class="grid gap-12 lg:grid-cols-[1fr_360px]">
			<!-- Content -->
			<div class="min-w-0">
				<SharedAlertsBaseAlert
					v-if="data?.registryNumber"
					icon-name="badge-check"
					mode="success"
					class="mb-4"
				>
					Объект прошёл классификацию. Реестровый номер
					{{ data.registryNumber }}
					<a
						class="base-link"
						href="https://tourism.fsa.gov.ru/ru/resorts/showcase/hotels"
						target="_blank"
						rel="noopener noreferrer nofollow"
						aria-label="в едином реестре объектов классификации в сфере туристской индустрии"
					>
						в едином реестре объектов классификации в сфере туристской индустрии
					</a>
				</SharedAlertsBaseAlert>

				<SharedAlertsBaseAlert
					icon-name="circle-alert"
					mode="warning"
					class="mb-10"
				>
					Во многих отелях динамическое ценообразование — перед бронированием
					уточните актуальный прайс по телефону
					<a
						href="tel:+74862780958"
						class="base-link font-semibold"
					>
						+7 (4862) 78-09-58 </a
					>.
				</SharedAlertsBaseAlert>

				<section
					v-if="data?.description"
					class="mb-10"
				>
					<h2 class="typo-h2 mb-4">О туре</h2>
					<p class="typo-body max-w-[68ch] text-neutral-600">
						{{ data.description }}
					</p>
				</section>

				<section class="mb-10">
					<h2 class="typo-h2 mb-4">Размещение</h2>
					<dl
						v-if="hasRoomsInfo"
						class="space-y-3"
					>
						<div
							v-for="(room, roomIndex) in data?.tours"
							:key="roomIndex"
							class="typo-body"
						>
							<dt class="inline font-semibold">{{ room?.roomName }}:</dt>
							<dd class="inline text-neutral-600">{{ room?.description }}</dd>
						</div>
					</dl>
					<SharedInformersEmptyDataInformer
						v-else
						text="Данных о номерах пока нет"
					/>
				</section>

				<section
					v-if="data?.includedInThePrice?.length"
					class="mb-10"
				>
					<EntitiesConditionsBlock
						:included="data.includedInThePrice.map((x) => x?.serviceName)"
						title="В стоимость входит"
					/>
				</section>

				<section v-if="data?.tours?.length">
					<h2 class="typo-h2 mb-4">Даты и цены</h2>
					<EntitiesBusTourTable :tours="data.tours" />
				</section>
			</div>

			<!-- Booking card -->
			<aside class="lg:sticky lg:top-24 lg:self-start">
				<FeaturesOrderWithInfo
					:price="data?.minPrice"
					:info-values="orderInfoValues"
					@click-order="contactMode = 'booking'"
					@click-question="contactMode = 'question'"
				/>
			</aside>
		</div>

		<FeaturesContactModal
			v-if="contactMode"
			:mode="contactMode"
			:context="tourTitle"
			@close="contactMode = null"
		/>
	</section>
</template>
