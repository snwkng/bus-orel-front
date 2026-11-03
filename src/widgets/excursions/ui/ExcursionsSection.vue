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

const { data } = getExcursionsCardList(routeRef);
</script>
<template>
	<div
		v-if="data?.length"
		class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
	>
		<SharedCardsTourCard
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
