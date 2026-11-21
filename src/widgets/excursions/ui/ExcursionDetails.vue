<script setup lang="ts">
import { getExcursion } from '@/entities/excursion/api/excursion.api';
import type { IOrderInfoValue } from '@/features/orderWithInfo/model/order-info.model';

const route = useRoute();

const dayjs = useDayjs();

const { url: siteUrl } = useSiteConfig();

const excursionId = computed(() => route.params.id as string);

const { data, error } = await getExcursion(excursionId);

const orderInfoValues = computed<IOrderInfoValue[]>(() => [
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

const contactMode = ref<'booking' | 'question' | null>(null);

// перекидываем на 404, если бэк выловил невалидный id
if (error.value) {
	throw createError({
		status: error.value?.statusCode,
		message: error.value?.message || error.value?.statusMessage,
		fatal: true
	});
}

const excursionTitle = computed(() =>
	data.value?.name ? `${data.value.name} — экскурсия из Орла` : ''
);

const excursionDescription = computed(() => {
	if (!data.value?.name) return '';
	const cities = data.value.cities?.length
		? ` Маршрут: ${data.value.cities.join(', ')}.`
		: '';
	const duration = endWordDayCheck.value
		? ` Длительность — ${endWordDayCheck.value}.`
		: '';
	const price = data.value.price
		? ` Цена ${new Intl.NumberFormat('ru-RU').format(data.value.price)} ₽.`
		: '';
	return `Экскурсия «${data.value.name}» из Орла.${cities}${duration}${price} Программа, даты и условия — на странице экскурсии.`;
});

useSeoMeta({
	title: excursionTitle,
	ogTitle: excursionTitle,
	description: excursionDescription,
	ogDescription: excursionDescription,
	ogImage: computed(() =>
		data.value?.images?.[0]
			? `${siteUrl}/_ipx/f_jpg&s_1200x630/image/${data.value.images[0]}`
			: `${siteUrl}/images/og-image.jpg`
	),
	ogImageWidth: 1200,
	ogImageHeight: 630
});

const excursionPageUrl = computed(() => `${siteUrl}/excursions/${excursionId.value}`);

useJsonLd(
	computed(() => ({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Главная',
				item: `${siteUrl}/`
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Экскурсии',
				item: `${siteUrl}/excursions`
			},
			{ '@type': 'ListItem', position: 3, name: data.value?.name }
		]
	}))
);

useJsonLd(
	computed(() => ({
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: data.value?.name,
		description: excursionDescription.value,
		image:
			data.value?.images?.map(
				(img) => `${siteUrl}/_ipx/f_jpg&s_1200x630/image/${img}`
			) ?? [],
		url: excursionPageUrl.value,
		offers: {
			'@type': 'Offer',
			price: data.value?.price,
			priceCurrency: 'RUB',
			availability: 'https://schema.org/InStock',
			url: excursionPageUrl.value
		}
	}))
);
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
				:to="{ name: 'excursions' }"
				class="transition-colors hover:text-neutral-900"
				>Экскурсии</NuxtLink
			>
			<Icon
				name="lucide:chevron-right"
				class="size-3.5"
			/>
			<span class="truncate text-neutral-900">{{ data?.name }}</span>
		</nav>

		<!-- Title -->
		<div class="mb-6">
			<FeaturesTitleWithDownloadFile
				:title="data?.name ?? ''"
				:file-name="data?.name ?? ''"
				:filenames="data?.fileName"
			/>
			<p
				v-if="data?.cities?.length"
				class="typo-small mt-2 flex items-center gap-1.5 text-neutral-500"
			>
				<Icon
					name="lucide:map-pin"
					class="text-secondary-600 size-4"
				/>
				{{ data.cities.join(', ') }}
			</p>
		</div>

		<!-- Gallery -->
		<FeaturesGalleryOrSlider
			:images="data?.images"
			:alt="data?.name ?? ''"
			class="mb-10"
		/>

		<div class="grid gap-12 lg:grid-cols-[1fr_360px]">
			<!-- Content -->
			<div class="min-w-0">
				<section
					v-if="data?.description?.length"
					class="mb-10"
				>
					<h2 class="typo-h2 mb-4">Программа тура</h2>
					<EntitiesExcursionDayContent
						v-for="(dayContent, index) in data.description"
						:key="index"
						:day="index + 1"
						:text="dayContent"
					/>
				</section>

				<section class="mb-10">
					<EntitiesConditionsBlock
						:included="data?.thePriceIncludes"
						:excluded="data?.additionallyPaid"
						included-title="В стоимость включено"
						excluded-title="Оплачивается отдельно"
						title="Условия тура"
					/>
				</section>

				<p class="typo-small text-neutral-500">
					Компания организатор оставляет за собой право вносить некоторые
					изменения в программу тура без уменьшения общего объема и качества
					услуг, в том числе предоставлять замену отеля на равнозначный.
					Компания организатор не несет ответственности за задержки, возникшие в
					результате пробок на дорогах, в случае тяжелой дорожной ситуации
					возможны поздние приезды в отели, объекты экскурсий. В случае особых
					непредвиденных ситуаций возможны изменения в порядке проведения
					экскурсий, объем программы при этом не меняется.
				</p>
			</div>

			<!-- Booking card -->
			<aside class="lg:sticky lg:top-24 lg:self-start">
				<FeaturesOrderWithInfo
					:price="data?.price"
					:info-values="orderInfoValues"
					@click-order="contactMode = 'booking'"
					@click-question="contactMode = 'question'"
				/>
			</aside>
		</div>

		<FeaturesContactModal
			v-if="contactMode"
			:mode="contactMode"
			:context="data?.name"
			@close="contactMode = null"
		/>
	</section>
</template>
