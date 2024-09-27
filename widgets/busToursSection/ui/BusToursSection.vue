<script setup lang="ts">

export interface Props {
	title?: string;
}

withDefaults(defineProps<Props>(), {
	title: ''
});

const route = useRoute();

const store = useTourStore();
const { getTours } = store;
const { cardMapped } = storeToRefs(store);

await useAsyncData(
	'tours',
	(): Promise<boolean> => store.getTours(route?.query).then(() => true)
);

watch(
	() => route.query,
	async () => {
		await getTours(route.query);
	}
);
</script>
<template>
	<section>
		<h2 v-if="title" class="mb-6 text-2xl font-bold">
			{{ title }}
		</h2>
		<SharedUiTheGrid>
			<EntitiesCard
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
		</SharedUiTheGrid>
	</section>
</template>
