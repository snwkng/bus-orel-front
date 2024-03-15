<script setup lang="ts">
import TheGallery from '@/shared/ui/gallery/TheGallery.vue';
import TheTourPriceTable from '~/shared/ui/tourPriceTable/TheTourPriceTable.vue';

const route = useRoute();
const tourId = route.params.id as string;
const store = useTourStore();

await useAsyncData(() => store.getTour(tourId).then(() => true))
</script>
<template>
	<div class="px-base py-10 gap-5 flex flex-col w-full">
		<div class="flex justify-between items-center">
			<h1 class="mb-2 text-4xl font-bold">
				{{ store.tour.type }} {{ store.tour.name }}
			</h1>
			<span>от {{ store.tour.fare }}</span>
		</div>
		<the-gallery :images="store.tour.images" />
		<div class="">
			<h3 class="text-xl font-semibold mb-2">
				Расположение
			</h3>
			<div>{{ store.tour.locationDescription }}</div>
		</div>
		<div class="">
			<h3 class="text-xl font-semibold mb-2">
				Размещение
			</h3>
			<div v-for="(room, roomIndex) in store.tour.rooms" :key="roomIndex">
				<div class="">
					{{ room.type }}, мест: {{ room.numberOfSeats }}
				</div>
				<div> {{ room.inRoom }}</div>
			</div>
		</div>
		<div class="">
			<h3 class="text-xl font-semibold mb-2">
				Питание
			</h3>
			<div>{{ store.tour.food }}</div>
		</div>
		<div class="">
			<h3 class="text-xl font-semibold mb-2">
				Даты и цены
			</h3>
			<the-tour-price-table :tours="store.tour.tours" />
		</div>
	</div>
</template>
