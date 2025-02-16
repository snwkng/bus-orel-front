<script setup lang="ts">
const cookie = useCookie('cookie_agree');
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<SharedUiCookieTheCookie v-if="!cookie" />
	</div>
</template>
