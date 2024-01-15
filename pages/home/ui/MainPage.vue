<script setup lang="ts">
import TourCard from '@/entities/tourCard'

definePageMeta({
	layout: 'default'
});
</script>
<template>
	<div class="grid grid-cols-4 gap-x-6 gap-y-10 p-4">
		<tour-card v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" />
	</div>
</template>
