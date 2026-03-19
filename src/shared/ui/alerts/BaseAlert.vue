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
		class="border rounded-xl px-5 py-3 font-semibold shadow-md"
		:class="colorClasses[mode]"
	>
		<div class="flex items-start justify-between gap-2">
			<div>
				<Icon
					v-if="iconName"
					:name="`lucide:${iconName}`"
					size="24"
					:class="iconColorClasses[mode]"
				/>
			</div>
			<slot />
		</div>
	</div>
</template>
