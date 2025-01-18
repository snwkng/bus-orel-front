<script setup lang="ts">
useHead({
	script: [
		{
			type: 'text/javascript',
			src: 'https://delimir.ru/js/frame-loader.min.js'
		}
	]
});
const router = useRouter();
onBeforeMount(() => {
	if (localStorage.getItem('reloaded')) {
		localStorage.removeItem('reloaded');
	} else {
		localStorage.setItem('reloaded', '1');
		router.go(0)
	}
});
</script>
<template>
	<div
		id="travelsoft-frame-container"
		data-frame="e582525c57"
	/>
</template>
