<script setup lang="ts">
import type { IExcursion } from '~/entities/excursion/model/types';

const { BASE_URL } = useRuntimeConfig().public;

const route = useRoute();

useHead({
	link: [
		{
			rel: 'canonical',
			href: BASE_URL + (route.path === '/' ? '' : route.path)
		}
	]
});

const excursionId = computed(() => route.params.id as string);

const { data, error } = await useFetch<IExcursion>(
	`/api/excursions/${excursionId.value}`,
	{
		key: `excursion-${excursionId.value}`
	}
);

// перекидываем на 404, если бэк выловил невалидный id
if (error.value) {
	throw createError({
		statusCode: error.value?.statusCode,
		message: error.value?.message || error.value?.statusMessage
	});
}

const accordionItems = computed(() =>
	data.value?.description?.map((x: string, index: number) => ({
		title: `День ${index + 1}`,
		content: x
	}))
);

const donwloadFile = async () => {
	const response = await $fetch(
		`/api/s3/download/${data.value?.documentName[0]}`
	);
	const link = document.createElement('a');
	link.href = URL.createObjectURL(response as Blob);
	link.click();
	URL.revokeObjectURL(link.href);
};
</script>
<template>
	<div class="w-full dark:bg-gray-800">
		<Head>
			<Title>
				{{ `Эскурсионный тур в ${data?.cities?.join(', ')}, ${data?.name}` }}
			</Title>
			<Meta
				name="description"
				:content="`Экскурсионный тур в ${data?.cities?.join(', ')} из Орла.`"
			/>
			<Meta
				name="og:title"
				:content="`Эскурсионный тур в ${data?.cities?.join(', ')}, ${data?.name}`"
			/>
			<Meta
				name="og:description"
				:content="`Экскурсионный тур в ${data?.cities?.join(', ')} из Орла.`"
			/>
			<Meta
				name="keywords"
				content="экскурсионные туры из Орла, экскурсии Орел, экскурсии на автобусе, недорогие экскурсии из Орла, экскурсии"
			/>
		</Head>
		<div
			class="max-w-container flex w-full flex-col gap-5 py-10 dark:bg-gray-800"
		>
			<WidgetsHeaderItem
				:title="data?.name"
				:price="data?.price"
				price-description="Минимально возможная цена за человека"
				:cities="data?.cities"
				:duration="data?.duration"
			/>
			<SharedUiGalleryTheGallery :images="data?.images ?? []" />
			
			<div class="">
				<button
					v-if="data?.documentName?.length && data?.documentName[0]"
					type="button"
					class="mb-2 min-h-14 w-full min-w-40 rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95 md:w-52"
					@click.prevent="donwloadFile"
				>
					Скачать прайс
				</button>
				<div
					v-if="data?.excursionStartDates?.length"
					id="ex-dates"
					class="dark:text-slate-200"
				>
					<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
						Даты предстоящих экскурсий
					</h3>
					<div class="flex flex-row whitespace-nowrap">
						<span
							v-for="(date, idx) in data.excursionStartDates"
							:key="idx"
						>
							{{ $dayjs(date).format('DD.MM.YYYY') }}<template v-if="idx !== data.excursionStartDates.length - 1">,&nbsp;</template>
					</span>
					</div>
				</div>
				<hr class="my-4" />
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Программа тура
				</h3>
				<SharedUiAccordionsTheAccordion
					:items="accordionItems ?? []"
					parent-id="ex-dates"
				/>
			</div>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					В стоимость входит
				</h3>
				<div class="flex flex-col gap-y-3">
					<div
						v-for="item in data?.thePriceIncludes"
						:key="item"
						class="flex w-full flex-row items-start gap-x-2 dark:text-slate-200"
					>
						<div>
							<SharedUiIconsCheckIcon
								width="24px"
								height="24px"
							/>
						</div>
						{{ item }}
					</div>
				</div>
			</div>
			<hr class="m-y-3 w-full bg-slate-200" />
			<p class="text-justify dark:text-slate-200">
				Компания организатор оставляет за собой право вносить некоторые
				изменения в программу тура без уменьшения общего объема и качества
				услуг, в том числе предоставлять замену отеля на равнозначный. Компания
				организатор не несет ответственности за задержки, возникшие в результате
				пробок на дорогах, в случае тяжелой дорожной ситуации возможны поздние
				приезды в отели, объекты экскурсий. В случае особых непредвиденных
				ситуаций возможны изменения в порядке проведения экскурсий, объем
				программы при этом не меняется.
			</p>
		</div>
	</div>
</template>
