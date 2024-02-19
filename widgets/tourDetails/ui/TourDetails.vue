<script setup lang="ts">
import TheGallery from '@/shared/ui/gallery/TheGallery.vue';

const route = useRoute();
const tourId = route.params.id as string;
const store = useTourStore();

await useAsyncData(() => store.getTour(tourId).then(() => true))
</script>
<template>
	<div class="px-base py-10">
		<div class="py-5 flex justify-between items-center">
			<h1 class="mb-2 text-4xl font-bold">
				{{ store.tour.type }} {{ store.tour.name }}
			</h1>
			<span>от {{ store.tour.fare }}</span>
		</div>
		<the-gallery :images="store.tour.images" />
		<div class="py-5">
			<h3 class="text-xl font-semibold mb-2">
				Расположение
			</h3>
			<div>{{ store.tour.locationDescription }}</div>
		</div>
		<div class="">
			<h3 class="text-xl font-semibold mb-2">
				Размещение
			</h3>
			<div>{{ store.tour.locationDescription }}</div>
		</div>
		<div class="py-5">
			<h3 class="text-xl font-semibold mb-2">
				Питание
			</h3>
			<div>{{ store.tour.food }}</div>
		</div>
	</div>
</template>
