<script setup lang="ts">
import TheCard from '@/entities/card';
import TheGrid from '@/shared/ui/TheGrid.vue';
import searchSection from '@/widgets/searchSection';
import BusRentSection from '@/widgets/busRentSection';

definePageMeta({
	layout: 'default'
});
</script>
<template>
	<div>
		<search-section />
		<div class="px-base py-8">
			<section class="pb-11">
				<h2 class="font-bold text-2xl mb-6">
					Автобусные туры к морю из Орла
				</h2>
				<the-grid>
					<the-card v-for="item in [1, 2, 3, 4, 5]" :key="item" />
				</the-grid>
			</section>
			<section class="pb-11">
				<h2 class="font-bold text-2xl mb-6">
					Экскурсионные туры из Орла
				</h2>
				<the-grid>
					<the-card v-for="item in [1, 2, 3, 4, 5]" :key="item" card-type="excursion" />
				</the-grid>
			</section>
		</div>
		<div class="px-0 py-0 lg:px-20 lg:py-8">
			<bus-rent-section />
		</div>
	</div>
</template>
