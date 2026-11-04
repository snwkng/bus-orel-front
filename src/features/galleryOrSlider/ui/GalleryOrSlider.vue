<script setup lang="ts">
interface IProps {
	images?: string[];
	alt?: string;
	icon?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	images: () => [],
	alt: 'Фото',
	icon: 'lucide:image'
});

const sliderRef = useTemplateRef('slider');
const { x: scrollX } = useScroll(sliderRef);

const activeIndex = computed(() => {
	const el = sliderRef.value;
	if (!el || el.clientWidth === 0) return 0;
	return Math.min(
		Math.round(scrollX.value / el.clientWidth),
		props.images.length - 1
	);
});
</script>

<template>
	<div>
		<!-- Mobile: свайп-галерея на всю ширину -->
		<div class="relative -mx-6 md:hidden">
			<div
				v-if="images.length"
				ref="slider"
				class="gallery-slider flex snap-x snap-mandatory overflow-x-auto"
			>
				<NuxtImg
					v-for="(img, i) in images"
					:key="`${img}-${i}`"
					:src="`/image/${img}`"
					:alt="`${alt} — фото ${i + 1}`"
					class="h-[300px] w-full shrink-0 snap-start bg-neutral-100 object-cover"
					height="300"
					loading="lazy"
					fit="inside"
				/>
			</div>
			<div
				v-else
				class="flex h-[300px] w-full flex-col items-center justify-center gap-2 bg-neutral-100"
			>
				<Icon
					:name="icon"
					class="text-secondary-300 size-8"
				/>
				<span class="text-sm font-semibold text-neutral-300">ГалаТур</span>
			</div>
			<span
				v-if="images.length > 1"
				class="typo-caption absolute right-4 bottom-3 rounded-full bg-black/60 px-2.5 py-1 font-semibold text-white"
				aria-hidden="true"
			>
				{{ activeIndex + 1 }} / {{ images.length }}
			</span>
		</div>

		<!-- Desktop: мозаика -->
		<SharedGalleryBaseGallery
			class="hidden md:grid"
			:images="images"
			:alt="alt"
			:icon="icon"
		/>
	</div>
</template>

<style scoped>
.gallery-slider {
	scrollbar-width: none;
}

.gallery-slider::-webkit-scrollbar {
	display: none;
}
</style>
