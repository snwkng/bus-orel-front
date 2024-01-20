<script setup lang="ts">
import TheCard from '@/entities/card';
import TheGrid from '@/shared/ui/TheGrid.vue';

export interface Props {
	title?: string,
}

withDefaults(defineProps<Props>(), {
	title: ''
})
</script>
<template>
	<section>
		<h2 v-if="title" class="font-bold text-2xl mb-6">
			{{ title }}
		</h2>
		<the-grid>
			<the-card v-for="item in [1, 2, 3, 4, 5]" :key="item" />
		</the-grid>
	</section>
</template>
