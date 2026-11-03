<script setup lang="ts">
const cookie = useCookieAgree();
</script>
<template>
	<div
		class="fixed bottom-0 z-10 w-full border-t border-neutral-200 bg-white py-4"
	>
		<div
			class="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-6 md:flex-row"
		>
			<p class="typo-small text-neutral-500">
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
			</p>
			<button
				type="button"
				class="bg-primary-500 hover:bg-primary-600 typo-button shrink-0 rounded-full px-5 py-2.5 text-white transition-all active:scale-95"
				@click="cookie = 'true'"
			>
				Подтвердить
			</button>
		</div>
	</div>
</template>
