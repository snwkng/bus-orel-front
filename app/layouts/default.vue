<script setup lang="ts">
import TheFooter from '@/widgets/footer';
import TheHeader from '@/widgets/header';
</script>
<template>
	<div>
		<the-header />
		<p>Some default layout content shared across all pages</p>
		<slot />
		<the-footer />
	</div>
</template>
