<script setup lang="ts">
import TheCookie from '@/shared/ui/cookie/TheCookie.vue'

const cookie = useCookie('cookie_agree');
</script>
<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<the-cookie v-if="!cookie" />
	</div>
</template>
