<script setup lang="ts">
import TheCard from '@/entities/card';
import TheGrid from '@/shared/ui/TheGrid.vue';

export interface Props {
	title?: string;
}

withDefaults(defineProps<Props>(), {
	title: ''
});

const route = useRoute();

const store = useExcursionStore();

const { getExcursions } = store;
const { cardMapped } = storeToRefs(store);

await useAsyncData(
	'excursions',
	(): Promise<void> => store.getExcursions(route?.query)
);

watch(
	() => route.query,
	async () => {
		await getExcursions(route.query);
	}
);
</script>
<template>
	<section>
		<h2 v-if="title" class="mb-6 text-2xl font-bold">
			{{ title }}
		</h2>
		<the-grid>
			<the-card
				v-for="item in cardMapped"
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
