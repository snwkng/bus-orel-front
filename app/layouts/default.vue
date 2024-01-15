<script setup lang="ts">
import TheFooter from '@/widgets/footer';
import TheHeader from '@/widgets/header';
</script>
<template>
	<div>
		<the-header />
		<div class="pt-14">
			<slot />
		</div>
		<the-footer />
	</div>
</template>
