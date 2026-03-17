<script setup lang="ts">
interface IProps {
	iconName?: string;
	mode?: 'default' | 'warning' | 'alert';
}

withDefaults(defineProps<IProps>(), {
	iconName: '',
	mode: 'default'
});

const colorClasses = computed(() => ({
	default: 'bg-neutral-100 dark:text-neutral-200 border-1 border-neutral-500',
	alert: 'bg-primary-100 dark:text-primary-200 border-1 border-primary-500',
	warning:
		'bg-secondary-100 dark:text-secondary-200 border-1 border-secondary-500'
}));

const iconColorClasses = computed(() => ({
  default: 'text-[#81afe1]',
	alert: 'text-red-500',
	warning:
		'text-[#ede9d0]'
}))
</script>

<template>
	<div
		class="rounded-xl px-5 py-3 font-semibold shadow-md dark:bg-gray-700"
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
