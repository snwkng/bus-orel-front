<script setup lang="ts">
interface IProps {
	size?: number;
	withWordmark?: boolean;
}

withDefaults(defineProps<IProps>(), {
	size: 32,
	withWordmark: true
});
</script>

<template>
	<span class="inline-flex items-center gap-2">
		<svg
			:width="size"
			:height="size"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="shrink-0 transition-transform duration-300 group-hover:rotate-6"
			aria-hidden="true"
		>
			<path
				d="M35 62 a25 25 0 0 1 50 0 z"
				class="fill-primary-500"
			/>
			<path
				d="M25 84 q12 -14 24 0 t24 0 t24 0"
				fill="none"
				class="stroke-secondary-600"
				stroke-width="12"
				stroke-linecap="round"
			/>
		</svg>
		<span
			v-if="withWordmark"
			class="text-lg font-semibold tracking-tight"
			>Галатур</span
		>
	</span>
</template>
