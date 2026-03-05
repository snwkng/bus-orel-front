<script setup lang="ts">
interface IProps {
	day: number;
	text: string;
}

defineProps<IProps>();
</script>
<template>
	<div
		class="relative flex gap-4"
	>
		<div
			class="relative z-10 flex h-fit w-fit flex-nowrap items-center justify-center rounded-xl bg-neutral-200 p-8"
		>
			<SharedFontsText
				variant="caption-lg"
				weight="bold"
				color="dark"
				class="whitespace-nowrap uppercase"
				>{{ day }} День</SharedFontsText
			>
		</div>
		<SharedFontsText
			variant="body-lg"
			weight="regular"
			>{{ text }}</SharedFontsText
		>
	</div>
</template>
