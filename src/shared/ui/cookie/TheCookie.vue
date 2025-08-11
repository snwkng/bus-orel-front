<script setup lang="ts">
const cookie = useCookie('cookie_agree');
</script>
<template>
	<div
		class="fixed bottom-0 z-10 w-full border-t border-slate-400 bg-white py-4 text-sm dark:border-slate-700 dark:bg-gray-800"
	>
		<div class="max-w-container flex min-h-10 flex-row items-center justify-between">
			<div class="text-slate-500 dark:text-slate-200">
				Мы используем cookie и аналогичные технологии.
				<NuxtLink
					to="/privacy-policy"
					class="text-deep-blue transition-colors hover:text-ligth-blue"
				>
					Узнайте подробнее
				</NuxtLink>
			</div>
			<button
				type="button"
				class="rounded-xl bg-deep-blue px-3 py-1 text-white transition-colors hover:bg-ligth-blue"
				@click="cookie = 'true'"
			>
				Хорошо
			</button>
		</div>
	</div>
</template>
