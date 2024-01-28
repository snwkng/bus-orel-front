<script setup lang="ts">
import TheCard from '@/entities/card';
import TheGrid from '@/shared/ui/TheGrid.vue';

export interface Props {
	title?: string,
}

withDefaults(defineProps<Props>(), {
	title: ''
})

const excursions = useExcursionsStore();
await callOnce(excursions.getExcursions)
</script>
<template>
	<section>
		<h2 v-if="title" class="font-bold text-2xl mb-6">
			{{ title }}
		</h2>
		<the-grid>
			<the-card
				v-for="item in excursions.cardMapped"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:subtitle="item.subtitle"
				:price="item.price"
				:images="item.images"
				type="excursion"
				image-path="excursions"
			/>
		</the-grid>
	</section>
</template>
