<script setup lang="ts">
import { getToursCardList } from '~/entities/tour/api/tour.api';

export interface IProps {
	emptyText?: string;
}

withDefaults(defineProps<IProps>(), {
	emptyText: 'Автобусных туров к морю пока нет'
});

const route = useRoute();

const routeRef = computed(() => route.query);

const { data, status } = getToursCardList(routeRef);
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
		<SharedCardsTourCard
			v-for="item in data"
			:id="item.id"
			:key="item.id"
			type="bus-tour"
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
