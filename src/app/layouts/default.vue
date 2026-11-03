<script setup lang="ts"></script>
<template>
	<div class="flex min-h-screen flex-col scroll-smooth">
		<WidgetsTheHeader />
		<main
			id="main"
			class="flex-1"
		>
			<slot />
		</main>
		<WidgetsTheFooter />
	</div>
</template>
