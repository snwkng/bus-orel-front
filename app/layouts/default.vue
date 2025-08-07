<script setup lang="ts">
</script>
<template>
	<div class="flex flex-col min-h-[100vh]">
		<WidgetsHeader />
		<main class="pt-14 flex-1 dark:bg-gray-800">
			<slot />
		</main>
		<WidgetsFooter />
	</div>
</template>
