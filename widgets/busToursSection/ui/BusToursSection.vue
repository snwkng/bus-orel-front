<script setup lang="ts">
export interface Props {
	title?: string;
	emptyText?: string;
	classes?: string;
}

withDefaults(defineProps<Props>(), {
	title: '',
	emptyText: '',
	classes: ''
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
	<section v-if="cardMapped.length || emptyText" :class="['dark:bg-gray-800 dark:text-slate-200', classes]">
		<h2 v-if="title && cardMapped.length" class="mb-6 text-2xl font-bold">
			{{ title }}
		</h2>
		<h2 v-else-if="emptyText.length && !cardMapped.length" class="text-2xl font-bold text-center">
			{{ emptyText }}
		</h2>
		<SharedUiTheGrid v-if="cardMapped.length">
			<EntitiesCard
				v-for="item in cardMapped"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:subtitle="item.subtitle"
				:price="item.price"
				:image="item.image"
				:date="null"
				type="tour"
				image-path="hotels"
			/>
		</SharedUiTheGrid>
	</section>
</template>
