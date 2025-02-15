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
		<path
			d="M12 27.2C12 46.4 32 56 32 56s20-9.6 20-28.8C52 16.6 43.05 8 32 8s-20 8.6-20 19.2z"
		/>
		<circle cx="32" cy="26.88" r="6.88" />
	</svg>
</template>
