<script setup lang="ts">
interface IProps {
	title: string;
	subtitle?: string;
	linkTo?: string;
	linkLabel?: string;
}

withDefaults(defineProps<IProps>(), {
	subtitle: undefined,
	linkTo: undefined,
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
					<h2 class="typo-h2">{{ title }}</h2>
					<NuxtLink
						v-if="linkTo"
						:to="linkTo"
						class="text-secondary-600 hover:text-secondary-700 typo-button flex items-center gap-1 transition-colors"
					>
						{{ linkLabel }}
						<Icon
							name="lucide:arrow-right"
							class="size-4"
						/>
					</NuxtLink>
				</div>
				<p
					v-if="subtitle"
					class="typo-small mt-1 text-neutral-500"
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
			class="carousel-slider flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
		>
			<slot />
		</div>
	</div>
</template>

<style scoped>
.carousel-slider {
	scrollbar-width: none;
}

.carousel-slider::-webkit-scrollbar {
	display: none;
}

@media (prefers-reduced-motion: reduce) {
	.carousel-slider {
		scroll-behavior: auto;
	}
}
</style>
