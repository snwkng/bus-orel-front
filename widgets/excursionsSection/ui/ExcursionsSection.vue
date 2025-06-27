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

const store = useExcursionStore();

const { getExcursions } = store;
const { cardMapped } = storeToRefs(store);

await callOnce('excursions', () => getExcursions(route?.query), {
	mode: 'navigation'
});

// await useAsyncData(
// 	'excursions',
// 	(): Promise<boolean> => getExcursions(route?.query).then(() => true)
// );

watch(
	() => route.query,
	async () => {
		await getExcursions(route.query);
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
		<SharedUiTheGrid>
			<EntitiesCard
				v-for="item in cardMapped"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:subtitle="item.subtitle"
				:price="item.price"
				:image="item.image"
				:date=" item?.date ? new Date(item.date) : null"
				type="excursion"
				image-path="excursions"
			/>
		</SharedUiTheGrid>
	</section>
</template>
