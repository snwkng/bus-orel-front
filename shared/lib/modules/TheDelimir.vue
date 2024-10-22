<script setup lang="ts">
onMounted(() => {
	// TODO: переделать
	if (localStorage.getItem('reloaded')) {
		localStorage.removeItem('reloaded');
	} else {
		localStorage.setItem('reloaded', '1');
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	}
});
</script>
<template>
	<div
		id="travelsoft-frame-container"
		data-frame="e582525c57"
	/>
	<component
		:is="'script'"
		type="text/javascript"
		src="https://delimir.ru/js/frame-loader.min.js"
	/>
</template>
