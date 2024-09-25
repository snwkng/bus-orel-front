<script setup lang="ts">
import type { ITourTable } from '~/entities/tour/model/types';

export interface Props {
	tours?: ITourTable[];
}

const props = withDefaults(defineProps<Props>(), {
	tours: () => []
});
</script>
<template>
	<div class="grid">
		<div v-for="(tour, index) in props.tours" :key="index">
			<div class="grid grid-cols-3">
				<div>{{ tour.roomName }}</div>
				<div>{{ tour.type }}</div>
				<div>
					мест в номере: <strong>{{ tour.numberOfSeats }}</strong>
				</div>
			</div>
			<div class="grid grid-cols-2">
				<div>Даты заезда</div>
				<div>Цена</div>
			</div>
			<div
				v-for="(datesAndPrices, index) in tour.datesAndPrices"
				:key="index"
				class="grid grid-cols-2"
			>
				<div>{{ datesAndPrices.startDate }} - {{ datesAndPrices.endDate }}</div>
				<div>{{ datesAndPrices.price }}</div>
			</div>
		</div>
	</div>
</template>
