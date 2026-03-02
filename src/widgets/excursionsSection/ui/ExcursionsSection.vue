<script setup lang="ts">
import { getExcursionsCardList } from '@/entities/excursion/api/excursion.api';

export interface IProps {
	title?: string;
	emptyText?: string;
	classes?: string;
}

defineProps<IProps>();

const route = useRoute();

const routeRef = computed(() => route.query);

const { data, pending } = getExcursionsCardList(routeRef);

</script>
<template>
	<section
		v-if="data?.length || emptyText"
		:class="['max-w-container', classes]"
	>
		<div
			v-if="title && data?.length"
			class="mb-6 flex items-baseline gap-4"
		>
			<SharedFontsHeading
				variant="heading-xl"
				color="default"
				weight="bold"
			>
				{{ title }}
			</SharedFontsHeading>
			<NuxtLink
				to="/excursions"
				class="flex items-center justify-center rounded-full bg-neutral-100 p-2 transition-all hover:scale-105 hover:shadow-md"
			>
				<Icon
					name="lucide:arrow-right"
					size="18"
					class="text-neutral-800"
				/>
			</NuxtLink>
		</div>
		<SharedFontsHeading
			v-else-if="emptyText?.length && !data?.length && !pending"
			variant="heading-xl"
			color="default"
			weight="bold"
			align="center"
		>
			{{ emptyText }}
		</SharedFontsHeading>
		<SharedLayoutsTheGrid v-if="data?.length">
			<SharedCardsBaseCard
				v-for="item in data"
				:id="item.id"
				:key="item.id"
				:title="item.title"
				:price="item.price"
				:date="item?.date ?? ''"
				:subtitle="item.subtitle"
				:image-link="item.image"
				type="excursion"
			/>
		</SharedLayoutsTheGrid>
	</section>
</template>
