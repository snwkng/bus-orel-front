<script setup lang="ts">
export interface IProps {
	checkboxId: string;
	modelValue: string[];
	value: string;
	label: string;
	disabled?: boolean;
}

const props = defineProps<IProps>();

const emit =
	defineEmits<(event: 'update:modelValue', payload: boolean) => void>();

const model = computed({
	get () {
		return props.modelValue;
	},
	set (value: boolean) {
		emit('update:modelValue', value);
	}
});
</script>
<template>
	<div class="flex gap-2 items-center p-2 bg-slate-200 hover:bg-slate-300 transition-all rounded-xl dark:bg-gray-700 dark:text-slate-200 hover:dark:bg-gray-500">
		<input
			:id="checkboxId"
			v-model="model"
			type="checkbox"
			:value="value"
			class="size-4"
		/>
		<label
			:for="checkboxId"
			class="flex font-semibold text-lg"
		>
			{{ label }}
		</label>
	</div>
</template>
