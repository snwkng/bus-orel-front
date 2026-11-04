<script setup lang="ts">
import { getExcursionsCardList } from '@/entities/excursion/api/excursion.api';

export interface IProps {
	emptyText?: string;
}

withDefaults(defineProps<IProps>(), {
	emptyText: 'Экскурсионных туров пока нет'
});

const route = useRoute();

const routeRef = computed(() => route.query);

const { data, status } = getExcursionsCardList(routeRef);
</script>
<template>
	<div
		v-if="status === 'pending' && !data?.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
		aria-hidden="true"
	>
		<SharedSkeletonCard
			v-for="i in 6"
			:key="i"
		/>
	</div>
	<div
		v-else-if="data?.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
	>
		<SharedCardsBaseCard
			v-for="item in data"
			:id="item.id"
			:key="item.id"
			type="excursion"
			:title="item.title"
			:price="item.price"
			:date="item?.date ?? ''"
			:subtitle="item.subtitle"
			:image-link="item.image"
		/>
	</div>
	<SharedInformersEmptyDataInformer
		v-else
		:text="emptyText"
	/>
</template>
