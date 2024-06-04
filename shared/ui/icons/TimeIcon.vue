<script setup lang="ts">
export interface IProps {
	width?: string;
	height?: string;
	color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	width: '32px',
	height: '32px',
	color: 'stroke-deep-orange'
});
</script>
<template>
	<svg
		:class="[props.color, 'stroke-2']"
		:width="props.width"
		:height="props.height"
		viewBox="0 0 64 64"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
	>
		<circle cx="32" cy="32" r="24" />
		<polyline points="40 44 32 32 32 16" />
	</svg>
</template>
