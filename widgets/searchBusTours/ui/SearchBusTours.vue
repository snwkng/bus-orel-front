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
			'px-base md:sticky top-14 z-10 flex h-full py-5 md:py-0 md:h-60 w-full flex-col items-center justify-center gap-y-8 bg-deep-blue text-white',
			{ 'shadow-lg': scroll },
		]"
	>
		<h1 :class="['mb-2 text-4xl font-bold']">
			Автобусные туры к морю из Орла
		</h1>

		<FeaturesSearchToursForm />
	</div>
</template>
