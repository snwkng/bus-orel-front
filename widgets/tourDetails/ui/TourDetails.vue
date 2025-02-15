<script setup lang="ts">
const store = useTourStore();

useHead({
	title: `Автобусный тур в ${store.tour.city}, ${store.tour.type} ${store.tour.name}`,
	meta: [
		{
			name: 'description',
			content:
				`Автобусный тур в ${store.tour.city} из Орла.`
		},
		{
			name: 'keywords',
			content:
				'автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом'
		}
	]
});

const route = useRoute();
const tourId = route.params.id as string;

await useAsyncData('tour', (): Promise<boolean> => store.getTour(tourId).then(() => true));
</script>
<template>
	<div class="w-full">
		<div class="px-base m-auto flex w-full flex-col gap-5 py-10 xl:w-[1280px]">
			<div class="bg-slate-300 px-5 py-3 rounded-xl text-red-700 font-semibold">
				УВАЖАЕМЫЕ КОЛЛЕГИ И ТУРИСТЫ ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ,
				ВО МНОГИХ ОТЕЛЯХ ДИНАМИЧЕСКОЕ ЦЕНООБРАЗОВАНИЕ,
				ПЕРЕД БРОНИРОВАНИЕМ ПОСТАРАЙТЕСЬ ЛУЧШЕ УТОЧНИТЬ АКТУАЛЬНЫЙ ПРАЙС.
				НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ!
			</div>
			<div class="flex items-center justify-between">
				<h1 class="mb-2 text-4xl font-bold">
					{{ store.tour.type }} {{ store.tour.name }}
				</h1>
				<div class="flex gap-x-1">
					<span>от {{ store.tour.price }}</span>
					<button type="button">
						Скачать прайс
					</button>
				</div>
			</div>
			<SharedUiGalleryTheGallery :images="store.tour.images" path="hotels" />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Расположение
				</h3>
				<div>{{ store.tour.locationDescription }}</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Размещение
				</h3>
				<div v-for="(room, roomIndex) in store.tour.tours" :key="roomIndex">
					<div class="py-2">
						<strong>{{ room.type }}, мест: {{ room.numberOfSeats }}:</strong>
						{{ room.inRoom }}
					</div>
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Питание
				</h3>
				<div>{{ store.tour.food }}</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Пляж
				</h3>
				<div>
					{{ store.tour.beach }}. до пляжа {{ store.tour.distanceToBeach }}.
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					Заселение
				</h3>
				<div>{{ store.tour.checkInConditions }}</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold">
					В стоимость включено
				</h3>
				<div>{{ store.tour.thePriceIncludes.join(', ') }}</div>
			</div>
		</div>

		<SharedUiTableBusTourTable :tours="store.tour.tours" />
	</div>
</template>
