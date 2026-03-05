<script setup lang="ts">
interface IProps {
	iconName: string;
	text: string;
}

defineProps<IProps>();
</script>

<template>
	<div class="flex items-start gap-1">
		<Icon
			:name="`lucide:${iconName}`"
			size="24"
			class="text-primary-500"
		/>
		<SharedFontsText
			variant="body-sm"
			color="muted"
		>
    {{ text }}
    </SharedFontsText>
	</div>
</template>
