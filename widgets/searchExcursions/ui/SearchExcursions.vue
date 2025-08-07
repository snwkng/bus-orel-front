<script setup lang="ts">

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
			'md:sticky top-14 z-10 h-full py-5 md:py-0 md:h-60 w-full dark:bg-gray-800 bg-deep-blue text-white',
			{ 'shadow-lg': scroll },
		]"
	>
		<div class="max-w-container flex flex-col items-center justify-center gap-y-8">
		<h1 :class="['mb-2 text-4xl font-bold']">
			Экскурсионные туры из Орла
		</h1>

		<FeaturesSearchExcursionsForm />
		</div>
	</div>
</template>
