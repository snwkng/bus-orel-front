<script setup lang="ts">
const error = useError();

const pageTitle = computed(() =>
	error.value?.status === 404
		? 'Страница не найдена — Галатур'
		: `Ошибка ${error.value?.status ?? ''} — Галатур`
);

useSeoMeta({
	title: pageTitle,
	ogTitle: pageTitle,
	description:
		'Такой страницы на сайте турагентства Галатур нет — вернитесь на главную и продолжите выбор тура.',
	ogDescription:
		'Такой страницы на сайте турагентства Галатур нет — вернитесь на главную и продолжите выбор тура.',
	robots: { noindex: true, nofollow: true }
});
</script>
<template>
	<div
		class="flex h-[100vh] w-full flex-col items-center justify-center gap-4 md:gap-6"
	>
		<img
			v-if="error?.status === 404"
			src="/images/notFound.webp"
			alt="Страница не найдена"
			class="h-[500px] w-full object-contain"
		/>
		<h1
			v-else
			class="text-3xl font-bold text-slate-600 md:text-7xl lg:text-9xl"
		>
			{{ error?.status }}
		</h1>
		<p class="text-3xl md:text-4xl lg:text-6xl">
			{{ error?.status === 404 ? 'Страница не найдена' : error?.message }}
		</p>
		<NuxtLink
			class="bg-primary-500 hover:bg-primary-500/95 mt-4 flex min-h-14 min-w-40 items-center justify-center rounded-xl px-4 py-2 text-xl font-semibold text-white transition-all"
			:to="{ name: 'index' }"
		>
			На главную
		</NuxtLink>
	</div>
</template>
