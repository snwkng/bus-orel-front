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
			'top-14 z-10 h-full w-full bg-deep-blue py-5 text-white dark:bg-gray-800 md:sticky md:h-60 md:py-0',
			{ 'shadow-lg': scroll }
		]"
	>
		<div
			class="max-w-container flex flex-col items-center justify-center gap-y-8"
		>
			<h1 :class="['mb-2 text-4xl font-bold']">Экскурсионные туры из Орла</h1>

			<FeaturesSearchExcursionsForm />
		</div>
	</div>
</template>
