<script lang="ts" setup>
import { useTemplateRef } from 'vue';

const sliderRef = useTemplateRef('slider');

const scroll = (direction: string) => {
	const container = sliderRef.value;
	if (!container) return;

	// Прокручиваем на ширину контейнера (или можно задать фиксированное число)
	const scrollStep = container.clientWidth * 0.7;
	container.scrollBy({
		left: direction === 'next' ? scrollStep : -scrollStep,
		behavior: 'smooth'
	});
};
</script>

<template>
	<div class="slider-container">
		<div class="slider-controls">
			<button
				class="flex items-center justify-center rounded-full bg-neutral-100 p-2 transition-all hover:scale-105 hover:shadow-md"
				type="button"
				@click="scroll('prev')"
			>
				<Icon
					name="lucide:arrow-left"
					size="24"
					class="text-neutral-800"
				/>
			</button>
			<button
				class="flex items-center justify-center rounded-full bg-neutral-100 p-2 transition-all hover:scale-105 hover:shadow-md"
				type="button"
				@click="scroll('next')"
			>
				<Icon
					name="lucide:arrow-right"
					size="24"
					class="text-neutral-800"
				/>
			</button>
		</div>

		<div
			ref="slider"
			class="slider-wrapper"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.slider-container {
  position: relative;

	.slider-wrapper {
		display: grid;
		grid-auto-flow: column;
    grid-auto-columns: calc(21.5% + 27.7143px);
		gap: 24px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
    user-select: none;
		&::-webkit-scrollbar {
			display: none;
		}

		@media (min-width: 1200px) {
			grid-auto-columns: calc(20% - -27.7143px);
		}

		@media (min-width: 1600px) {
			grid-auto-columns: calc(16% - 10.2857px);
		}

		// Глубокий селектор, чтобы стилизовать элементы, переданные в слот
		:deep(> *) {
			// flex: 0 0 80%;
			scroll-snap-align: center;

			@media (min-width: 1024px) {
				// flex: 0 0 300px;
			}
		}
	}
}
.slider-controls {
  position: absolute;
  right: 0;
  top: -60px;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
	gap: 12px;
	@media (max-width: 768px) {
		display: none;
	}
}
</style>
