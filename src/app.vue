<script setup lang="ts">
const { BASE_URL } = useRuntimeConfig().public;

const route = useRoute();

const cookie = useCookie('cookie_agree', {
	maxAge: 60 * 60 * 24 * 7, // 1 неделя в секундах
	path: '/', // доступно для всего сайта
	httpOnly: false, // если true, JS на клиенте не сможет его прочитать
	secure: true, // только через HTTPS
	sameSite: 'lax' // защита от CSRF
});

useHead({
	link: [
		{
			rel: 'canonical',
			href: computed(() => BASE_URL + (route.path === '/' ? '' : route.path))
		}
	]
});
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<SharedCookieTheCookie v-if="!cookie" />
	</div>
</template>
