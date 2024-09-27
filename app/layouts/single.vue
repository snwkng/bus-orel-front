<script setup lang="ts">
</script>
<template>
	<div>
		<WidgetsHeader :is-single="true" />
		<main class="pt-14">
			<slot />
		</main>
		<WidgetsFooter :is-single="true" />
	</div>
</template>
