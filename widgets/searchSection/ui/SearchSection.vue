<script setup lang="ts">
import TheInput from '@/shared/ui/input/Theinput.vue'

const title = ref('Поиск автобусных туров к морю из Орла')
</script>
<template>
	<div class="px-base w-full h-96 bg-deep-blue flex flex-col items-center justify-center gap-y-5 text-white">
		<h1 class=" font-bold text-4xl">
			{{ title }}
		</h1>
		<the-input label="Откуда" />
	</div>
</template>
