<script setup lang="ts">
interface IProps {
	iconName: string;
	iconColor?: string;
	title?: string;
	text?: string;
	textOnTitle?: boolean;
}

withDefaults(defineProps<IProps>(), {
	iconColor: 'text-secondary-600',
	title: '',
	text: '',
	textOnTitle: false
});
</script>

<template>
	<div
		v-if="text"
		class="flex items-start gap-2.5"
	>
		<Icon
			:name="`lucide:${iconName}`"
			class="mt-0.5 size-4.5 shrink-0"
			:class="iconColor"
		/>
		<div class="min-w-0">
			<p
				v-if="title && !textOnTitle"
				class="typo-caption font-semibold text-neutral-500"
			>
				{{ title }}
			</p>
			<p
				class="typo-small"
				:class="textOnTitle ? 'text-neutral-600' : 'font-medium'"
			>
				{{ text }}
			</p>
		</div>
	</div>
</template>
