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
			'px-base top-14 z-10 flex h-full w-full flex-col items-center justify-center gap-y-8 dark:bg-gray-800 bg-deep-blue py-5 text-white md:sticky md:h-60 md:py-0',
			{ 'shadow-lg': scroll },
		]"
	>
		<h1 :class="['mb-2 text-4xl font-bold']">
			Автобусные туры к морю из Орла
		</h1>

		<FeaturesSearchToursForm />
	</div>
</template>
