<script setup lang="ts">
const error: any = useError();
</script>
<template>
	<div class="flex h-[100vh] w-full flex-col items-center justify-center gap-5">
		<h1 class="text-9xl font-extrabold">
			Ошибка {{ error?.statusCode }}
		</h1>
		<div class="flex flex-col items-center gap-5">
			<div
				v-if="error?.statusCode === 404"
				class="text-5xl"
			>
				Страница {{ error?.url }} не найдена
			</div>
			<RouterLink
				class="flex min-h-14 min-w-40 items-center justify-center rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95"
				:to="{ name: 'home' }"
			>
				На главную
			</RouterLink>
		</div>
	</div>
</template>
