<script setup lang="ts">
interface IProps {
	images: string[];
	alt?: string;
	icon?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	alt: 'Фото',
	icon: 'lucide:image'
});

const MAX_TILES = 5;

const visibleImages = computed(() => props.images.slice(0, MAX_TILES));
const hiddenCount = computed(() =>
	Math.max(props.images.length - MAX_TILES, 0)
);

const tiles = computed<(string | null)[]>(() =>
	visibleImages.value.length > 0 ? visibleImages.value : [null]
);

const tileClass = (index: number): string => {
	const n = tiles.value.length;
	if (n === 1) return 'col-span-4 row-span-2';
	if (n === 2) return 'col-span-2 row-span-2';
	if (index === 0) return 'col-span-2 row-span-2';
	if (n === 4 && index === 3) return 'col-span-2';
	return '';
};
</script>

<template>
	<div
		class="grid h-[350px] w-full grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-2xl md:h-[500px]"
	>
		<div
			v-for="(tile, i) in tiles"
			:key="i"
			class="relative overflow-hidden bg-neutral-100"
			:class="tileClass(i)"
		>
			<NuxtImg
				v-if="tile"
				:src="`/image/${tile}`"
				:alt="`${alt} — фото ${i + 1}`"
				class="h-full w-full object-cover object-center transition duration-300 hover:brightness-90"
				loading="lazy"
				fit="outside"
			/>
			<div
				v-else
				class="flex h-full w-full flex-col items-center justify-center gap-2"
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
</template>
