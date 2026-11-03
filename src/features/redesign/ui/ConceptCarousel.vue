<script setup lang="ts">
import type { ConceptCardItem } from '../lib/conceptData';

interface IProps {
	title: string;
	subtitle?: string;
	linkTo: string;
	linkLabel?: string;
	basePath: string;
	items: ConceptCardItem[];
}

withDefaults(defineProps<IProps>(), {
	subtitle: undefined,
	linkLabel: 'Смотреть все'
});

const sliderRef = useTemplateRef('carouselSlider');
const prevBtnRef = useTemplateRef('carouselPrev');
const nextBtnRef = useTemplateRef('carouselNext');

const { isStart, isEnd, scroll } = useHorizontalSlider(
	sliderRef,
	prevBtnRef,
	nextBtnRef,
	{ scrollRatio: 0.8 }
);
</script>

<template>
	<div>
		<div class="mb-8 flex items-end justify-between gap-4">
			<div>
				<div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
					<h2 class="text-2xl font-bold tracking-tight">{{ title }}</h2>
					<NuxtLink
						:to="linkTo"
						class="text-secondary-600 hover:text-secondary-700 flex items-center gap-1 text-sm font-semibold transition-colors"
					>
						{{ linkLabel }}
						<Icon
							name="lucide:arrow-right"
							class="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
						/>
					</NuxtLink>
				</div>
				<p
					v-if="subtitle"
					class="mt-1 text-sm text-neutral-500"
				>
					{{ subtitle }}
				</p>
			</div>
			<div class="flex items-center gap-2">
				<button
					ref="carouselPrev"
					type="button"
					:disabled="isStart"
					class="hidden size-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-sm md:flex"
					aria-label="Предыдущие"
					@click="scroll('prev')"
				>
					<Icon
						name="lucide:chevron-left"
						class="size-5"
					/>
				</button>
				<button
					ref="carouselNext"
					type="button"
					:disabled="isEnd"
					class="hidden size-10 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-sm md:flex"
					aria-label="Следующие"
					@click="scroll('next')"
				>
					<Icon
						name="lucide:chevron-right"
						class="size-5"
					/>
				</button>
			</div>
		</div>

		<div
			ref="carouselSlider"
			class="concept-carousel -mx-6 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto scroll-smooth px-6 pb-2"
		>
			<FeaturesConceptCard
				v-for="item in items"
				:key="item.id"
				:item="item"
				:to="`${basePath}/${item.id}`"
				class="w-[72vw] shrink-0 snap-start sm:w-[280px] lg:w-[282px]"
			/>
		</div>
	</div>
</template>

<style scoped>
.concept-carousel {
	scrollbar-width: none;
}

.concept-carousel::-webkit-scrollbar {
	display: none;
}

@media (prefers-reduced-motion: reduce) {
	.concept-carousel {
		scroll-behavior: auto;
	}
}
</style>
