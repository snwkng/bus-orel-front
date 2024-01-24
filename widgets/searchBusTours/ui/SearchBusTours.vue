<script setup lang="ts">
import SearchToursForm from '@/features/searchToursForm';

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
})

const scroll = ref(false)

const handleScroll = () => {
	scroll.value = window.scrollY > 1
}
</script>
<template>
	<div :class="['px-base w-full h-60 bg-deep-blue flex flex-col items-center justify-center gap-y-8 text-white sticky top-14 z-10', { 'shadow-lg': scroll }]">
		<h1 :class="['font-bold text-4xl mb-2']">
			Автобусные туры к морю из Орла
		</h1>

		<search-tours-form />
	</div>
</template>
