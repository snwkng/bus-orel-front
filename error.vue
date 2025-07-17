<script setup lang="ts">
const error = useError();

</script>
<template>
	<div
		class="flex h-[100vh] w-full flex-col items-center justify-center gap-4 md:gap-6"
	>
		<h1 class="text-3xl font-bold text-slate-600 md:text-7xl lg:text-9xl">
			{{ error?.statusCode }}
		</h1>
		<p
			v-if="error?.statusCode === 404"
			class="text-3xl md:text-4xl lg:text-6xl"
		>
			Страница не найдена
		</p>
		<RouterLink
			class="flex min-h-14 min-w-40 mt-4 items-center justify-center rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95"
			:to="{ name: 'home' }"
		>
			На главную
		</RouterLink>
	</div>
</template>
