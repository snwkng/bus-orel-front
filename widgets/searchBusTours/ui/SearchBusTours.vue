<script setup lang="ts">
import SearchToursForm from '@/features/searchToursForm';

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
});

const scroll = ref(false);

const handleScroll = () => {
	scroll.value = window.scrollY > 1;
};
</script>
<template>
	<div
		:class="[
			'px-base sticky top-14 z-10 flex h-60 w-full flex-col items-center justify-center gap-y-8 bg-deep-blue text-white',
			{ 'shadow-lg': scroll },
		]"
	>
		<h1 :class="['mb-2 text-4xl font-bold']">
			Автобусные туры к морю из Орла
		</h1>

		<search-tours-form />
	</div>
</template>
