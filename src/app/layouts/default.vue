<script setup lang="ts"></script>
<template>
	<div class="flex min-h-[100vh] flex-col">
		<WidgetsHeader />
		<main
			id="main"
			class="flex-1 pt-14 dark:bg-gray-800"
		>
			<slot />
		</main>
		<WidgetsFooter />
	</div>
</template>
