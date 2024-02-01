<script setup lang="ts">
import TheFooter from '@/widgets/footer';
import TheHeader from '@/widgets/header';
import TheCookie from '@/shared/ui/cookie/TheCookie.vue'

const cookie = useCookie('cookie_agree');
</script>
<template>
	<div>
		<the-header />
		<main class="pt-14">
			<slot />
		</main>
		<the-footer />
		<the-cookie v-if="!cookie" />
	</div>
</template>
