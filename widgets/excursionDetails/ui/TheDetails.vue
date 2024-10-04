<script setup lang="ts">
const route = useRoute();
const excursionId = route.params.id as string;
const store = useExcursionStore();

await useAsyncData(
	'excursion',
	(): Promise<boolean> => store.getExcursion(excursionId).then(() => true)
);

// eslint-disable-next-line vue/max-len
const accordionItems = computed(() => store.excursion.description.map((x: string, index: number) => ({
	title: `День ${index + 1}`,
	content: x
})));
</script>
<template>
	<div class="w-full">
		<div class="px-base m-auto flex w-full flex-col gap-5 py-10 xl:w-[1280px]">
			<div class="flex items-center justify-between">
				<h1 class="mb-2 text-4xl font-bold">
					{{ store.excursion.name }}
				</h1>
			</div>
			<SharedUiGalleryTheGallery
				:images="store.excursion.images"
				path="excursions"
			/>
			<div
				class="flex w-full flex-col flex-wrap justify-between gap-x-8 gap-y-4 rounded-xl bg-slate-100 px-5 py-6 text-slate-600 sm:flex-row sm:items-center"
			>
				<div class="flex items-center gap-x-1">
					<div><SharedUiIconsLocationIcon width="32px" height="32px" /></div>
					{{ store.excursion.city }}
				</div>
				<div class="flex items-center gap-x-1">
					<div><SharedUiIconsTimeIcon width="32px" height="32px" /></div>
					{{ store.excursion.duration }}
				</div>
				<div class="flex items-center gap-x-1">
					<div><SharedUiIconsDateIcon width="32px" height="32px" /></div>
					{{ $dayjs(store.excursion.excursionStart).format('DD.MM.YYYY') }}
				</div>
				<div class="flex items-center gap-x-1" title="Стоимость">
					<div><SharedUiIconsMoneyIcon width="32px" height="32px" /></div>
					от {{ store.excursion.price }} ₽
				</div>
				<div class="flex items-center gap-x-1">
					<div><SharedUiIconsCityIcon width="32px" height="32px" /></div>
					{{ store.excursion.hotelName }}
				</div>
				<div class="flex items-center gap-x-1" title="Скачать прайс">
					<div><SharedUiIconsFileIcon width="32px" height="32px" /></div>
					{{ store.excursion.documentName }}
				</div>
			</div>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Программа тура
				</h3>
				<SharedUiAccordionsTheAccordion :items="accordionItems" />
			</div>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					В стоимость входит
				</h3>
				<div class="flex flex-col gap-y-3">
					<div
						v-for="item in store.excursion.thePriceIncludes"
						:key="item"
						class="flex w-full flex-row items-start gap-x-2"
					>
						<div>
							<SharedUiIconsCheckIcon width="24px" height="24px" />
						</div>
						{{ item }}
					</div>
				</div>
			</div>
			<hr class="m-y-3 w-full bg-slate-200" />
			<p class="text-justify">
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
