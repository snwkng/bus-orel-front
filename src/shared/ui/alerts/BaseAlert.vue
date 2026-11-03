<script setup lang="ts">
interface IProps {
	iconName?: string;
	mode?: 'info' | 'success' | 'warning' | 'error';
}

withDefaults(defineProps<IProps>(), {
	iconName: '',
	mode: 'info'
});

const colorClasses = computed(() => ({
	info: 'bg-accent-info/15 border-accent-info',
	success: 'bg-accent-success/15 border-accent-success',
	warning: 'bg-accent-warning/15 border-accent-warning',
	error: 'bg-accent-error/15 border-accent-error'
}));

const iconColorClasses = computed(() => ({
	info: 'text-accent-info',
	success: 'text-accent-success',
	warning: 'text-accent-warning',
	error: 'text-accent-error'
}));
</script>

<template>
	<div
		class="typo-small rounded-2xl border px-5 py-4"
		:class="colorClasses[mode]"
	>
		<div class="flex items-start gap-3">
			<Icon
				v-if="iconName"
				:name="`lucide:${iconName}`"
				class="mt-0.5 size-5 shrink-0"
				:class="iconColorClasses[mode]"
			/>
			<div class="min-w-0">
				<slot />
			</div>
		</div>
	</div>
</template>
