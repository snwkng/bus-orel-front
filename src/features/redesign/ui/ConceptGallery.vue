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

const MAX_TILES = 5;

const visibleImages = computed(() => props.images.slice(0, MAX_TILES));
const hiddenCount = computed(() =>
	Math.max(props.images.length - MAX_TILES, 0)
);

// Без фото — одна заглушка на всю ширину
const tiles = computed<(string | null)[]>(() =>
	visibleImages.value.length > 0 ? visibleImages.value : [null]
);

const tileClass = (index: number): string => {
	const n = tiles.value.length;
	if (n === 1) return 'col-span-4 row-span-2';
	if (n === 2) return 'col-span-2 row-span-2';
	if (index === 0) return 'col-span-2 row-span-2';
	if (n === 3) return 'col-span-2';
	if (n === 4 && index === 3) return 'col-span-2';
	return '';
};
</script>

<template>
	<div class="mb-12">
		<!-- Mobile: swipe-слайдер -->
		<div
			class="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-3 overflow-x-auto px-6 pb-1 md:hidden"
		>
			<div
				v-for="(tile, i) in tiles"
				:key="`m-${i}`"
				class="h-[280px] w-[80vw] shrink-0 snap-start overflow-hidden rounded-2xl"
			>
				<img
					v-if="tile"
					:src="tile"
					:alt="`${alt} — фото ${i + 1}`"
					class="h-full w-full object-cover"
				/>
				<div
					v-else
					class="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-100"
				>
					<Icon
						:name="icon"
						class="text-secondary-300 size-8"
					/>
					<span class="text-sm font-semibold text-neutral-300">ГалаТур</span>
				</div>
			</div>
		</div>

		<!-- Desktop: адаптивная мозаика -->
		<div
			class="hidden h-[420px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl md:grid"
		>
			<div
				v-for="(tile, i) in tiles"
				:key="`d-${i}`"
				class="relative overflow-hidden"
				:class="tileClass(i)"
			>
				<img
					v-if="tile"
					:src="tile"
					:alt="`${alt} — фото ${i + 1}`"
					class="h-full w-full object-cover"
				/>
				<div
					v-else
					class="flex h-full w-full flex-col items-center justify-center gap-2 bg-neutral-100"
				>
					<Icon
						:name="icon"
						class="text-secondary-300 size-8"
					/>
					<span class="text-sm font-semibold text-neutral-300">ГалаТур</span>
				</div>
				<span
					v-if="hiddenCount > 0 && i === tiles.length - 1"
					class="absolute inset-0 flex items-center justify-center bg-black/45 text-lg font-semibold text-white"
				>
					+{{ hiddenCount }} фото
				</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
.overflow-x-auto {
	scrollbar-width: none;
}

.overflow-x-auto::-webkit-scrollbar {
	display: none;
}
</style>
