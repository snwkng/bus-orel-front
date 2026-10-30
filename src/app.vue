<script setup lang="ts">
const { url: siteUrl } = useSiteConfig();
const { $modals } = useNuxtApp();

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
			href: computed(() => siteUrl + (route.path === '/' ? '' : route.path))
		}
	]
});
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<ClientOnly>
			<component
				:is="modal.component"
				v-for="modal in $modals.activeModals.value"
				:key="modal.id"
				v-bind="modal.props"
				@close="modal.props.onClose"
				@confirm="modal.props.onConfirm"
			/>
		</ClientOnly>
		<SharedCookieTheCookie v-if="!cookie" />
	</div>
</template>
