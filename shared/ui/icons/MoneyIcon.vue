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
		<polyline points="8 36 16 36 16 52 8 52" />
		<path d="M16 38h8a4 4 0 0 1 4 4h9a3 3 0 0 1 3 3 3 3 0 0 1-3 3H26" />
		<path
			d="m40 44.8 6.63-4a5.82 5.82 0 0 1 3-.82 5.78 5.78 0 0 1 4.09 1.69L56 44 38.07 54.76A8.75 8.75 0 0 1 33.58 56a8.68 8.68 0 0 1-3.06-.56L16 50"
		/>
		<circle cx="38" cy="22" r="14" />
		<path d="M36.33 22a3.34 3.34 0 0 1 0-6.67" />
		<path d="M39.67 22a3.34 3.34 0 0 1 0 6.67" />
		<line x1="38" y1="12" x2="38" y2="15.33" />
		<line x1="38" y1="28.67" x2="38" y2="32" />
		<line x1="36.33" y1="22" x2="39.67" y2="22" />
		<path d="M43 17s-1.67-1.67-3.33-1.67h-3.34" />
		<path d="M33 27s1.67 1.67 3.33 1.67h3.34" />
	</svg>
</template>
