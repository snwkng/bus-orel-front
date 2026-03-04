<script setup lang="ts">
import { getToursCardList } from '~/entities/tour/api/tour.api';
import TheGrid from '@/shared/ui/layouts/TheGrid.vue';
import BaseSlider from '@/shared/ui/sliders/BaseSlider.vue';

export interface IProps {
	type: 'slider' | 'grid';
	title?: string;
	emptyText?: string;
	iconLink?: string
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
	<div
		v-if="data?.length || emptyText"
		class="max-w-container"
	>
		<div v-if="title || (emptyText && !data?.length)" class="mb-6 flex items-baseline gap-4" :class="{'justify-center': emptyText}">
			<SharedFontsHeading
				variant="heading-xl"
				color="default"
				weight="bold"
			>
				{{ title || emptyText }}
			</SharedFontsHeading>
			<NuxtLink
				v-if="iconLink"
				:to="`/${iconLink}`"
				class="flex items-center justify-center rounded-full bg-neutral-100 p-2 transition-all hover:scale-105 hover:shadow-md"
			>
				<Icon
					name="lucide:arrow-right"
					size="18"
					class="text-neutral-800"
				/>
			</NuxtLink>
		</div>

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
