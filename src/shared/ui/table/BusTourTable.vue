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
		<div class="border border-gray-300 rounded-xl p-4" v-for="(tour, index) in props.tours" :key="index">
			<div class="grid grid-cols-2 font-semibold">
				<div>Даты заезда</div>
				<div>{{ tour.roomName }}</div>
			</div>
			<div
				v-for="(datesAndPrices, dataIndex) in tour.datesAndPrices"
				:key="dataIndex"
				class="grid grid-cols-2"
			>
				<div>{{ $dayjs(datesAndPrices.startDate).format('DD.MM.YYYY') }} - {{ $dayjs(datesAndPrices.endDate).format('DD.MM.YYYY') }}</div>
				<div>{{ datesAndPrices.price }}&#8381;</div>
			</div>
		</div>
	</div>
</template>
