<script setup lang="ts">
const { url: siteUrl } = useSiteConfig();

const route = useRoute();

const cookie = useCookieAgree();

useSeoMeta({
	ogType: 'website',
	ogLocale: 'ru_RU',
	ogSiteName: 'Галатур — туристическое агентство',
	ogImage: `${siteUrl}/images/og-image.jpg`,
	ogUrl: computed(() => siteUrl + route.path),
	twitterCard: 'summary_large_image'
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
		<SharedCookieTheCookie v-if="!cookie" />
	</div>
</template>
