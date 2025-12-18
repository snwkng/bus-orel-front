<script setup lang="ts">
const cookie = useCookie('cookie_agree');
</script>
<template>
	<div
		class="fixed bottom-0 z-10 w-full border-t border-slate-400 bg-white py-4 text-sm dark:border-slate-700 dark:bg-gray-800"
	>
		<div
			class="max-w-container flex min-h-10 flex-col items-center justify-between gap-5 md:flex-row"
		>
			<div class="text-slate-500 dark:text-slate-200">
				Данный веб-сайт использует файлы cookie с целью повышения удобства и
				эффективности работы пользователя. Нажимая на кнопку «Подтвердить», Вы
				соглашаетесь с
				<NuxtLink
					to="/privacy-policy"
					class="base-link"
				>
					Условиями использования файлов cookie и Политикой обработки
					персональных данных.
				</NuxtLink>
				В случае несогласия с обработкой файлов cookie, Вы должны покинуть сайт
				или произвести соответствующие настройки.
			</div>
			<button
				type="button"
				class="rounded-xl bg-deep-blue px-3 py-1 text-white transition-colors hover:bg-ligth-blue"
				@click="cookie = 'true'"
			>
				Подтвердить
			</button>
		</div>
	</div>
</template>
