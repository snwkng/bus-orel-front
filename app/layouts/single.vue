<script setup lang="ts">
import TheFooter from '@/widgets/footer';
import TheHeader from '@/widgets/header';
</script>
<template>
	<div>
		<the-header :is-single="true" />
		<main class="pt-14">
			<slot />
		</main>
		<the-footer :is-single="true" />
	</div>
</template>
