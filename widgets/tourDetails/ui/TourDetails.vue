<script setup lang="ts">
import TheGallery from '@/shared/ui/gallery/TheGallery.vue';

const route = useRoute();
const tourId = route.params.id as string;
const store = useTourStore();

await useAsyncData(() => store.getTour(tourId).then(() => true))
</script>
<template>
	<div class="w-full">
		<div class="xl:w-[1280px] w-full m-auto px-base py-10 gap-5 flex flex-col">
			<div class="flex justify-between items-center">
				<h1 class="mb-2 text-4xl font-bold">
					{{ store.tour.type }} {{ store.tour.name }}
				</h1>
				<div class="flex gap-x-1">
					<span>от {{ store.tour.fare }}</span>
					<button type="button">
						Скачать прайс
					</button>
				</div>
			</div>
			<the-gallery :images="store.tour.images" path="hotels" />
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Расположение
				</h3>
				<div>{{ store.tour.locationDescription }}</div>
			</div>
			<hr>
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Размещение
				</h3>
				<div v-for="(room, roomIndex) in store.tour.tours" :key="roomIndex">
					<div class="py-2">
						<strong>{{ room.type }}, мест: {{ room.numberOfSeats }}:</strong>
						{{ room.inRoom }}
					</div>
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Питание
				</h3>
				<div>{{ store.tour.food }}</div>
			</div>
			<hr>
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Пляж
				</h3>
				<div>{{ store.tour.beach }}. до пляжа {{ store.tour.distanceToBeach }}.</div>
			</div>
			<hr>
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Заселение
				</h3>
				<div>{{ store.tour.checkInConditions }}</div>
			</div>
			<hr>
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					В стоимость включено
				</h3>
				<div>{{ store.tour.thePriceIncludes }}</div>
			</div>
		</div>
	</div>
</template>
