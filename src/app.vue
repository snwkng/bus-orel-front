<script setup lang="ts">
const { url: siteUrl } = useSiteConfig();

const route = useRoute();

const cookie = useCookieAgree();

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
		<SharedCookieTheCookie v-if="!cookie" />
	</div>
</template>
