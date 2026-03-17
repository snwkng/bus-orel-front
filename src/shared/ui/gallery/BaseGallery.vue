<script setup lang="ts">
const AREAS = ['a', 'b', 'c', 'd', 'e'] as const;

defineProps<{
	images: string[];
}>();
</script>

<template>
	<div
		class="grid h-[300px] w-full auto-cols-fr gap-2 overflow-hidden rounded-xl grid-areas-gallery-desktop md:h-[450px]"
	>
		<div
			v-for="(area, idx) in AREAS"
			:key="area"
			class="relative h-full w-full overflow-hidden bg-neutral-300 transition-opacity hover:opacity-90"
			:class="`grid-in-${area}`"
		>
			<NuxtImg
				v-if="images[idx]"
				class="h-full w-full object-cover object-center"
				:src="`/image/${images[idx]}`"
				:alt="area"
				:title="area"
				loading="lazy"
				fit="outside"
			/>
		</div>
	</div>
</template>
