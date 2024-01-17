<script setup lang="ts">
import SearchTourForm from '@/features/searchTourForm'

const title = ref('Поиск автобусных туров к морю из Орла')
</script>
<template>
	<div class="px-base w-full h-96 bg-deep-blue flex flex-col items-center justify-center gap-y-6 text-white">
		<h1 class=" font-bold text-4xl mb-2">
			{{ title }}
		</h1>
		<search-tour-form />
	</div>
</template>
