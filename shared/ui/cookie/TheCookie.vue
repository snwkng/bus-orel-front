<script setup lang="ts">
const cookie = useCookie('cookie_agree');
</script>
<template>
	<div class="flex flex-row items-center justify-between px-base py-4 min-h-10 w-full border-t border-gray-400 fixed bottom-0 bg-white">
		<div class="text-gray-500">
			Мы используем cookie и аналогичные технологии.
			<router-link to="#" class="text-deep-blue hover:text-ligth-blue transition-colors">
				Узнайте подробнее
			</router-link>
		</div>
		<button type="button" class="px-3 py-1 text-white bg-deep-blue hover:bg-ligth-blue transition-colors rounded-xl" @click="cookie = true">
			Хорошо
		</button>
	</div>
</template>
