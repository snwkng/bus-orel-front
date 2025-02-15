<script setup lang="ts">
const route = useRoute();
const excursionId = route.params.id as string;
const store = useExcursionStore();

await useAsyncData(
	'excursion',
	(): Promise<boolean> => store.getExcursion(excursionId).then(() => true)
);

const accordionItems = computed(
	() => store.excursion.description.map((x: string, index: number) => ({
		title: `День ${index + 1}`,
		content: x
	}))
);
</script>
<template>
	<div class="w-full">
		<Head>
			<Title>
				{{
					`Эскурсионный тур в ${store.excursion.cities?.map((x: SelectItem) => x.name).join(', ')}, ${store.excursion.name}`
				}}
			</Title>
			<Meta
				name="description"
				:content="`Экскурсионный тур в ${store.excursion.cities?.map((x: SelectItem) => x.name).join(', ')} из Орла.`"
			/>
			<Meta
				name="keywords"
				content="экскурсионные туры из Орла, экскурсии Орел, экскурсии на автобусе, недорогие экскурсии из Орла, экскурсии"
			/>
		</Head>
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
			<SharedUiIconsInfoExcursionIconsBar
				:cities="
					store.excursion.cities?.map((x: SelectItem) => x.name).join(', ')
				"
				:duration="store.excursion.duration"
				:excursion-start="new Date(store.excursion?.excursionStart)"
				:price="store.excursion.price"
				:hotel-name="store.excursion.hotelName"
				:document-name="store.excursion.documentName"
			/>
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
