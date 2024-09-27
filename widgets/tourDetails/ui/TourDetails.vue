<script setup lang="ts">

const route = useRoute();
const tourId = route.params.id as string;
const store = useTourStore();

await useAsyncData('tour', (): Promise<boolean> => store.getTour(tourId).then(() => true));
</script>
<template>
	<div class="w-full">
		<div class="px-base m-auto flex w-full flex-col gap-5 py-10 xl:w-[1280px]">
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
