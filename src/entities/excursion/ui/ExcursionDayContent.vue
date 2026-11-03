<script setup lang="ts">
interface IProps {
	day: number;
	text: string;
}

defineProps<IProps>();
</script>
<template>
	<div class="relative flex gap-5 pb-6 last:pb-0">
		<div class="flex flex-col items-center">
			<span
				class="bg-secondary-600 typo-small z-10 flex size-9 shrink-0 items-center justify-center rounded-full font-bold text-white"
			>
				{{ day }}
			</span>
			<span class="bg-secondary-200 w-px flex-1 last:hidden" />
		</div>
		<div class="pt-1.5 pb-1">
			<p class="typo-body font-semibold">День {{ day }}</p>
			<p class="typo-small mt-1 max-w-[64ch] text-neutral-600">
				{{ text }}
			</p>
		</div>
	</div>
</template>
