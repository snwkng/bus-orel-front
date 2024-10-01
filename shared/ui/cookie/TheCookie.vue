<script setup lang="ts">
const cookie = useCookie('cookie_agree');
</script>
<template>
	<div
		class="px-base fixed bottom-0 z-10 flex min-h-10 w-full flex-row items-center justify-between border-t border-slate-400 bg-white py-4 text-sm"
	>
		<div class="text-slate-500">
			Мы используем cookie и аналогичные технологии.
			<router-link
				to="/privacy-policy"
				class="text-deep-blue transition-colors hover:text-ligth-blue"
			>
				Узнайте подробнее
			</router-link>
		</div>
		<button
			type="button"
			class="rounded-xl bg-deep-blue px-3 py-1 text-white transition-colors hover:bg-ligth-blue"
			@click="cookie = 'true'"
		>
			Хорошо
		</button>
	</div>
</template>
