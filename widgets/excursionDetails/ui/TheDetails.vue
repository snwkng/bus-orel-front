<script setup lang="ts">
const route = useRoute();
const excursionId = route.params.id as string;
const store = useExcursionStore();
const { getExcursion } = store;
const { excursion } = storeToRefs(store);

await callOnce(
	`excursion-${excursionId}`,
	() => getExcursion(excursionId),
	{ mode: 'navigation' }
)

// await useAsyncData(
// 	'excursion',
// 	(): Promise<boolean> => store.getExcursion(excursionId).then(() => true)
// );

const accordionItems = computed(
	() => excursion.value.description?.map((x: string, index: number) => ({
		title: `День ${index + 1}`,
		content: x
	}))
);

const endWordDayCheck = () => {
	if (excursion.value.duration === 1) {
		return 'день'
	// eslint-disable-next-line no-else-return
	} else if (excursion.value.duration > 1 && excursion.value.duration < 5) {
		return 'дня'
	} else if (excursion.value.duration >= 5) {
		return 'дней'
	} else {
		return ''
	}
}
</script>
<template>
	<div class="w-full dark:bg-gray-800">
		<Head>
			<Title>
				{{
					`Эскурсионный тур в ${excursion.cities?.join(', ')}, ${excursion.name}`
				}}
			</Title>
			<Meta
				name="description"
				:content="`Экскурсионный тур в ${excursion.cities?.join(', ')} из Орла.`"
			/>
			<Meta
				name="keywords"
				content="экскурсионные туры из Орла, экскурсии Орел, экскурсии на автобусе, недорогие экскурсии из Орла, экскурсии"
			/>
		</Head>
		<div
			class="px-base m-auto flex w-full flex-col gap-5 py-10 dark:bg-gray-800 xl:w-[1280px]"
		>
			<div class="flex md:items-center md:justify-between sm:flex-col md:flex-row sm:gap-y-4">
				<div class="felx flex-col gap-y-2">
					<h1 class="mb-2 text-4xl font-bold dark:text-slate-200">
						{{ excursion.name }}
					</h1>
					<div class="flex flex-row gap-1 items-center gap-x-3">
						<div class="flex flex-row gap-1 items-center justify-center text-gray-500 dark:text-slate-200">
							<SharedUiIconsLocationIcon
								width="24px"
								height="24px"
							/>
							<span class="">{{ excursion.cities?.map((x: string) => x).join(', ') }}</span>
						</div>
						<div class="flex flex-row gap-1 items-center justify-center">
							<SharedUiIconsTimeIcon
								width="24px"
								height="24px"
							/>
							<span class="text-gray-500 dark:text-slate-200">{{ excursion.duration }} {{ endWordDayCheck() }}</span>
						</div>
					</div>
				</div>
				<div>
					<div class="flex flex-col md:items-end justify-end gap-y-2">
						<span class="text-sm text-gray-400">
							Минимальная цена за человека
						</span>
						<span class="font-semibold dark:text-slate-200">от {{ excursion.price }} ₽</span>
					</div>
				</div>
			</div>
			<SharedUiGalleryTheGallery
				:images="excursion.images"
				path="excursions"
			/>
			<!-- <SharedUiIconsInfoExcursionIconsBar
				:cities="excursion.value.cities?.map((x: string) => x).join(', ')"
				:duration="excursion.value.duration"
				:excursion-start="new Date(excursion?.excursionStart)"
				:price="excursion.value.price"
				:hotel-name="excursion.value.hotelName"
				:document-name="excursion.value.documentName"
			/> -->
			<div class="">
				<div id="ex-dates" class="dark:text-slate-200">
					<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
						Даты предстоящих экскурсий
					</h3>
					{{ $dayjs(excursion?.excursionStart).format('DD.MM.YYYY') }},
					{{ $dayjs(excursion?.excursionStart).format('DD.MM.YYYY') }}
				</div>
				<hr class="my-4" />
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Программа тура
				</h3>
				<SharedUiAccordionsTheAccordion :items="accordionItems" parent-id="ex-dates" />
			</div>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					В стоимость входит
				</h3>
				<div class="flex flex-col gap-y-3">
					<div
						v-for="item in excursion.thePriceIncludes"
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
