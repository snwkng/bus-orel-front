<script setup lang="ts">
export interface IProps {
	checkboxId: string;
	modelValue: (string | undefined)[];
	value: string;
	label: string;
	disabled?: boolean;
}

const props = defineProps<IProps>();

const emit =
	defineEmits<(event: 'update:modelValue', payload: boolean) => void>();

const model = computed({
	get() {
		return props.modelValue;
	},
	set(value: boolean) {
		emit('update:modelValue', value);
	}
});
</script>
<template>
	<div
		class="flex items-center gap-2 rounded-xl bg-slate-200 p-2 transition-all hover:bg-slate-300 dark:bg-gray-700 dark:text-slate-200 hover:dark:bg-gray-500"
	>
		<input
			:id="checkboxId"
			v-model="model"
			type="checkbox"
			:value="value"
			class="size-4"
		/>
		<label
			:for="checkboxId"
			class="flex text-lg font-semibold"
		>
			{{ label }}
		</label>
	</div>
</template>
