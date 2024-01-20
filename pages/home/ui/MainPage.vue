<script setup lang="ts">
import searchSection from '@/widgets/searchSection';
import BusRentSection from '@/widgets/busRentSection';
import BusToursSection from '@/widgets/busToursSection';
import ExcursionsSection from '@/widgets/excursionsSection';

definePageMeta({
	layout: 'default'
});
</script>
<template>
	<div>
		<search-section />
		<div class="px-base py-8">
			<bus-tours-section title="Автобусные туры к морю из Орла" class="pb-11" />
			<excursions-section title="Экскурсионные туры из Орла" class="pb-11" />
		</div>
		<div class="px-0 py-0 lg:px-20 lg:py-8">
			<bus-rent-section />
		</div>
	</div>
</template>
