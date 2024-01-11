<script setup lang="ts">
import TheFooter from '@/widgets/footer';
</script>
<template>
	<div>
		<p>Some default layout content shared across all pages</p>
		<slot />
		<the-footer />
	</div>
</template>
