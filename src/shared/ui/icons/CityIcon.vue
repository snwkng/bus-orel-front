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
		<polygon points="8 24 8 56 56 56 56 24 32 8 8 24" />
		<polyline points="40 56 40 36 24 36 24 56" />
	</svg>
</template>
