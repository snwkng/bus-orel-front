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
			'top-14 z-10 h-full w-full dark:bg-gray-800 bg-deep-blue py-5 text-white md:sticky md:h-60 md:py-0',
			{ 'shadow-lg': scroll },
		]"
	>
		<div class="max-w-container flex-col items-center flex justify-center gap-y-8">
		<h1 :class="['mb-2 text-4xl font-bold']">
			Автобусные туры к морю из Орла
		</h1>

		<FeaturesSearchToursForm />
		</div>
	</div>
</template>
