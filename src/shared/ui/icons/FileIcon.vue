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
		<polyline points="44 8 44 16 52 16" />
		<polygon points="52 16 44 8 12 8 12 56 52 56 52 16" />
		<path
			d="M26.22 20.08C19.37 22 41.51 42.71 43 35.8s-26.33 2.89-21.41 7.68 11.48-25.27 4.63-23.4z"
		/>
	</svg>
</template>
