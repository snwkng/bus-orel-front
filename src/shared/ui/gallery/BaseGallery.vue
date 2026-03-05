<script setup lang="ts">
// Массив имен областей должен соответствовать буквам в конфиге
const AREAS = ['a', 'b', 'c', 'd', 'e'] as const;

defineProps<{
	images: string[];
}>();
</script>

<template>
	<!-- Используем созданный класс сетки -->
	<div class="grid-areas-gallery-desktop auto-cols-fr grid h-[300px] md:h-[450px] w-full gap-2 rounded-xl overflow-hidden">
		<div
			v-for="(img, idx) in 5"
			:key="img"
			:class="[
				'relative overflow-hidden transition-opacity hover:opacity-90',
				// Динамически подставляем grid-in-main, grid-in-a и т.д.
				`grid-in-${AREAS[idx]}`
			]"
		>
			<NuxtImg
        v-if="images[idx]"
				class="w-full h-full object-cover object-center"
				:src="`/image/${images[idx]}`"
				:alt="img"
				:title="img"
				loading="lazy"
				fit="outside"
			/>
      <div v-else class="bg-neutral-300 h-full w-full" />
		</div>
	</div>
</template>
