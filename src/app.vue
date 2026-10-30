<script setup lang="ts">
const { url: siteUrl } = useSiteConfig();
const { $modals } = useNuxtApp();

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
