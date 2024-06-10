<script setup lang="ts">
import TheCard from '@/entities/card';
import TheGrid from '@/shared/ui/TheGrid.vue';

export interface Props {
	title?: string,
}

withDefaults(defineProps<Props>(), {
	title: ''
})

const route = useRoute();

const store = useTourStore();
const { getTours } = store;
const { cardMapped } = storeToRefs(store);

await callOnce(async () => {
	await getTours(route.query);
})
watch(
	() => route.query,
	async () => {
		await getTours(route.query);
	}
)

</script>
<template>
	<section>
		<h2 v-if="title" class="font-bold text-2xl mb-6">
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
				type="tour"
				image-path="hotels"
			/>
		</the-grid>
	</section>
</template>
