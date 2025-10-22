<script setup lang="ts">
const error = useError();

useSeoMeta({
	title: `Галатур Орел - Ошибка ${error.value?.statusCode || ''}`,
	ogTitle: `Галатур Орел - Ошибка ${error.value?.statusCode || ''}`,
		description:
		 `Галатур Орел - Ошибка ${error.value?.statusCode || ''}`,
	ogDescription:
		`Галатур Орел - Ошибка ${error.value?.statusCode || ''}`,
	keywords:
		'',
	robots: { noindex: true, nofollow: true }
});
</script>
<template>
	<div
		class="flex h-[100vh] w-full flex-col items-center justify-center gap-4 md:gap-6"
	>
		<h1 class="text-3xl font-bold text-slate-600 md:text-7xl lg:text-9xl">
			{{ error?.statusCode }}
		</h1>
		<p class="text-3xl md:text-4xl lg:text-6xl">
			{{
				error?.statusCode === 404 ? 'Страница не найдена' : error?.message
			}}
		</p>
		<NuxtLink
			class="mt-4 flex min-h-14 min-w-40 items-center justify-center rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95"
			:to="{ name: 'home' }"
		>
			На главную
		</NuxtLink>
	</div>
</template>
