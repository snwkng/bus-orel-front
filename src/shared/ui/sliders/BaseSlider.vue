<script lang="ts" setup>
interface IProps {
	showIndicators?: boolean;
}

withDefaults(defineProps<IProps>(), {
	showIndicators: false
});

const sliderRef = useTemplateRef('slider');
const prevBtnRef = useTemplateRef('prev');
const nextBtnRef = useTemplateRef('next');

const {
	isStart,
	isEnd,
	visibleIndices,
	scroll
	// scrollToIndex
} = useHorizontalSlider(sliderRef, prevBtnRef, nextBtnRef, {
	scrollRatio: 0.7,
	visibilityThreshold: 0.5,
	enableKeyboard: true,
	onScrollEnd: () => {
		console.log('Доскроллили до конца!');
	}
});

// (для отладки)
watch(
	visibleIndices,
	(indices) => {
		console.log('Видимые слайды:', indices);
	},
	{ deep: true }
);
</script>

<template>
	<div class="slider-container">
		<slot name="controls">
			<div class="slider-controls">
				<button
					ref="prev"
					type="button"
					:disabled="isStart"
					class="slider-btn disabled:cursor-not-allowed disabled:opacity-40"
					aria-label="Предыдущие слайды"
					@click="scroll('prev')"
				>
					<Icon
						name="lucide:arrow-left"
						size="24"
					/>
				</button>

				<button
					ref="next"
					type="button"
					:disabled="isEnd"
					class="slider-btn disabled:cursor-not-allowed disabled:opacity-40"
					aria-label="Следующие слайды"
					@click="scroll('next')"
				>
					<Icon
						name="lucide:arrow-right"
						size="24"
					/>
				</button>
			</div>
		</slot>

		<div
			ref="slider"
			class="slider-wrapper"
			aria-label="Горизонтальный слайдер"
		>
			<slot />
		</div>

		<slot name="indicators">
			<div
				v-if="visibleIndices.length > 0 && showIndicators"
				class="slider-indicators"
			>
				<span
					v-for="idx in visibleIndices"
					:key="idx"
					class="indicator"
					:class="{ active: true }"
				/>
			</div>
		</slot>
	</div>
</template>

<style lang="scss" scoped>
.slider-container {
	position: relative;
}

.slider-controls {
	position: absolute;
	right: 0;
	top: -60px;
	display: flex;
	gap: 12px;

	@media (max-width: 768px) {
		display: none; // Скрываем на мобильных (там свайп)
	}
}

.slider-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 9999px;
	background-color: rgb(245 245 245);
	padding: 8px;
	transition: all 0.2s;

	&:hover:not(:disabled) {
		transform: scale(1.05);
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
	}
}

.slider-wrapper {
	display: grid;
	grid-auto-flow: column;
	gap: 24px;
	overflow-x: auto;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	user-select: none;

	grid-auto-columns: calc((100% - 24px) / 2);

	@media (min-width: 1024px) {
		grid-auto-columns: calc((100% - 24px * 2) / 3);
	}

	@media (min-width: 1200px) {
		grid-auto-columns: calc((100% - 24px * 4) / 5);
	}

	@media (min-width: 1600px) {
		grid-auto-columns: calc((100% - 24px * 5) / 6);
	}

	// Скрываем скроллбар
	&::-webkit-scrollbar {
		display: none;
	}

	// Стили для элементов в слоте
	:deep(> *) {
		scroll-snap-align: start;
	}
}

.slider-indicators {
	display: flex;
	justify-content: center;
	gap: 8px;
	margin-top: 16px;
}

.indicator {
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: rgb(229 229 229);
	transition: background-color 0.2s;

	&.active {
		background-color: rgb(38 38 38);
	}
}
</style>
