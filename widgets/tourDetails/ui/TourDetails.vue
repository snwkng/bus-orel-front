<script setup lang="ts">
const store = useTourStore();

const route = useRoute();
const tourId = route.params.id as string;

await useAsyncData('tour', (): Promise<boolean> => store.getTour(tourId).then(() => true));
</script>
<template>
	<div class="w-full">
		<Head>
			<Title>{{ `Автобусный тур в ${store.tour.city}, ${store.tour.type} ${store.tour.name}` }}</Title>
			<Meta name="description" :content="`Автобусный тур в ${store.tour.city} из Орла.`" />
			<Meta name="keywords" content="автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом" />
		</Head>
		<div class="px-base m-auto flex w-full flex-col gap-5 py-10 xl:w-[1280px]">
			<div class="bg-slate-100 px-5 py-3 rounded-xl font-semibold">
				УВАЖАЕМЫЕ ТУРИСТЫ ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ,
				ВО МНОГИХ ОТЕЛЯХ ДИНАМИЧЕСКОЕ ЦЕНООБРАЗОВАНИЕ,
				ПЕРЕД БРОНИРОВАНИЕМ ПОСТАРАЙТЕСЬ ЛУЧШЕ УТОЧНИТЬ АКТУАЛЬНЫЙ ПРАЙС.
				НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ! КОНСУЛЬТАЦИЯ И БРОНИРОВАНИЕ:
				<span class="text-red-700">ТЕЛ. +79036370958</span>
			</div>
			<div class="flex items-center justify-between">
				<h1 class="mb-2 text-4xl font-bold">
					{{ store.tour.type }} {{ store.tour.name }}
				</h1>
				<div class="flex flex-col gap-x-1 items-end">
					<span class="font-semibold">от {{ store.tour.price }}₽</span>
					<span class="text-slate-400 text-sm">Минимально возможная цена за 1 туриста при 2-х местном размещении</span>
					<!-- <button type="button">
						Скачать прайс
					</button> -->
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
			<!-- <div class="">
				<h3 class="mb-2 text-xl font-semibold">
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
