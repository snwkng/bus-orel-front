<script setup lang="ts">
import { getToursCardList } from '~/entities/tour/api/tour.api';
import TheGrid from '@/shared/ui/layouts/TheGrid.vue';
import BaseSlider from '@/shared/ui/sliders/BaseSlider.vue';

export interface IProps {
	type: 'slider' | 'grid';
}

const props = defineProps<IProps>();

const route = useRoute();

const routeRef = computed(() => route.query);

const { data, pending } = getToursCardList(routeRef);

const componentName = computed(() =>
	props.type === 'slider' ? BaseSlider : TheGrid
);
</script>
<template>
	<div class="max-w-container">
		<slot
			name="title"
			:data-length="data?.length"
		/>

		<component
			:is="componentName"
			v-if="data?.length"
		>
			<SharedCardsBaseCard
				v-for="item in data"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:price="item.price"
				:date="item?.date ?? ''"
				:subtitle="item.subtitle"
				:image-link="item.image"
				type="bus-tour"
			/>
		</component>
	</div>
</template>