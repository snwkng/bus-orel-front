<script setup lang="ts">
import TheFooter from '@/widgets/footer';
import TheHeader from '@/widgets/header';
</script>
<template>
	<div>
		<the-header />
		<main class="pt-14">
			<slot />
		</main>
		<the-footer />
	</div>
</template>
