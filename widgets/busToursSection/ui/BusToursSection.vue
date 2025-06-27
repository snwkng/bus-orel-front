<script setup lang="ts">
import type { ITour } from '~/entities/tour/model/types';

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

const { data } = await useFetch('/api/bus-tours', {
	query: computed(() => route.query),
	transform: (data) => {
		return (data as ITour[]).map((tour: ITour) => ({
			id: tour._id,
			title: tour.name,
			subtitle: tour?.address.city ?? '',
			price: tour.minPrice,
			image: tour?.images?.[0]
		}));
	}
});
</script>
<template>
	<section
		v-if="data?.length || emptyText"
		:class="['dark:bg-gray-800 dark:text-slate-200', classes]"
	>
		<h2
			v-if="title && data?.length"
			class="mb-6 text-2xl font-bold"
		>
			{{ title }}
		</h2>
		<h2
			v-else-if="emptyText.length && !data?.length"
			class="text-center text-2xl font-bold"
		>
			{{ emptyText }}
		</h2>
		<SharedUiTheGrid v-if="data?.length">
			<EntitiesCard
				v-for="item in data"
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
