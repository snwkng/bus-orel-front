<script setup lang="ts">
import TheCard from '@/entities/card'
import TheGrid from '@/shared/ui/TheGrid.vue'

definePageMeta({
	layout: 'default'
});
</script>
<template>
	<the-grid class="p-4">
		<the-card v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" />
	</the-grid>
</template>
