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
		:class="props.color"
		:width="props.width"
		:height="props.height"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M17 9.5L12 14.5L7 9.5"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
