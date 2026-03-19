<script setup lang="ts">
const error = useError();

useSeoMeta({
	title: `Галатур Орел - Ошибка ${error.value?.status || ''}`,
	ogTitle: `Галатур Орел - Ошибка ${error.value?.status || ''}`,
	description: `Галатур Орел - Ошибка ${error.value?.status || ''}`,
	ogDescription: `Галатур Орел - Ошибка ${error.value?.status || ''}`,
	keywords: '',
	robots: { noindex: true, nofollow: true }
});
</script>
<template>
	<div
		class="flex h-[100vh] w-full flex-col items-center justify-center gap-4 md:gap-6"
	>
		<img v-if="error?.status === 404" src="/images/notFound.webp" alt="404 - error" class="object-contain w-full h-[500px]" />
		<h1 v-else class="text-3xl font-bold text-slate-600 md:text-7xl lg:text-9xl">
			{{ error?.status }}
		</h1>
		<p class="text-3xl md:text-4xl lg:text-6xl">
			{{ error?.status === 404 ? 'Страница не найдена' : error?.message }}
		</p>
		<NuxtLink
			class="mt-4 flex min-h-14 min-w-40 items-center justify-center rounded-xl bg-primary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-primary-500/95"
			:to="{ name: 'index' }"
		>
			На главную
		</NuxtLink>
	</div>
</template>
