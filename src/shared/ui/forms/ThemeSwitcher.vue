<script setup lang="ts">
const colorMode = useColorMode();
const toggleTheme = () => {
	colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark';
};
</script>
<template>
	<div class="flex flex-row items-center justify-center btn-hover">
		<SharedUiIconsNightIcon
			v-show="colorMode?.preference === 'light'"
			width="24"
			height="24"
			color="white"
			class="cursor-pointer"
			@click="toggleTheme"
		/>
		<SharedUiIconsSunIcon
			v-show="colorMode?.preference === 'dark'"
			width="24"
			height="24"
			color="white"
			class="cursor-pointer"
			@click="toggleTheme"
		/>
	</div>
</template>
