<script setup lang="ts">
const store = useTourStore();

const route = useRoute();
const tourId = route.params.id as string;

await useAsyncData('tour', (): Promise<boolean> => store.getTour(tourId).then(() => true));
</script>
<template>
	<div class="w-full dark:bg-gray-800">
		<Head>
			<Title>{{ `Автобусный тур в ${store.tour.city}, ${store.tour.type} ${store.tour.name}` }}</Title>
			<Meta name="description" :content="`Автобусный тур в ${store.tour.city} из Орла.`" />
			<Meta name="keywords" content="автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом" />
		</Head>
		<div class="px-base m-auto flex w-full flex-col gap-5 py-10 xl:w-[1280px] dark:bg-gray-800">
			<div class="dark:bg-gray-700  dark:text-slate-200 bg-slate-100 px-5 py-3 rounded-xl font-semibold">
				УВАЖАЕМЫЕ ТУРИСТЫ ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ,
				ВО МНОГИХ ОТЕЛЯХ ДИНАМИЧЕСКОЕ ЦЕНООБРАЗОВАНИЕ,
				ПЕРЕД БРОНИРОВАНИЕМ ПОСТАРАЙТЕСЬ ЛУЧШЕ УТОЧНИТЬ АКТУАЛЬНЫЙ ПРАЙС.
				НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ! КОНСУЛЬТАЦИЯ И БРОНИРОВАНИЕ:
				<span class="dark:text-red-300 text-red-700">ТЕЛ. +79036370958</span>
			</div>
			<div class="flex items-center justify-between">
				<h1 class="mb-2 text-4xl font-bold dark:text-slate-200">
					{{ store.tour.type }} {{ store.tour.name }}
				</h1>
				<div class="flex flex-col gap-x-1 items-end">
					<span class="font-semibold dark:text-slate-200">от {{ store.tour.price }}₽</span>
					<span class="text-slate-400 text-sm">Минимально возможная цена за 1 туриста при 2-х местном размещении</span>
					<!-- <button type="button">
						Скачать прайс
					</button> -->
				</div>
			</div>
			<SharedUiGalleryTheGallery :images="store.tour.images" path="hotels" />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Расположение
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.locationDescription }}
				</div>
			</div>
			<!-- <hr /> -->
			<!-- <div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Размещение
				</h3>
				<div v-for="(room, roomIndex) in store.tour.tours" :key="roomIndex">
					<div class="py-2">
						<strong>{{ room.type }}, мест: {{ room.numberOfSeats }}:</strong>
						{{ room.inRoom }}
					</div>
				</div>
			</div> -->
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Питание
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.food }}
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Пляж
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.beach }}. до пляжа {{ store.tour.distanceToBeach }}.
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Заселение
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.checkInConditions }}
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					В стоимость включено
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.thePriceIncludes.join(', ') }}
				</div>
			</div>
		</div>

		<SharedUiTableBusTourTable :tours="store.tour.tours" />
	</div>
</template>
