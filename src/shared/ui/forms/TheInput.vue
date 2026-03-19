<script setup lang="ts">
export interface IProps {
	inputId?: string;
	label?: string;
	type?: string;
	placeholder?: string;
	disabled?: boolean;
}

withDefaults(defineProps<IProps>(), {
	inputId: '',
	label: '',
	type: 'text',
	placeholder: '',
	disabled: false
});

const model = defineModel<string>();
</script>
<template>
	<div class="relative w-full min-w-40 md:w-auto">
		<Transition name="label-fade">
			<label
				v-if="label"
				:for="inputId"
				class="absolute left-4 top-[-28px] hidden text-sm font-normal text-white md:block"
			>
				{{ label }}
			</label>
		</Transition>
		<input
			:id="inputId"
			v-model="model"
			:disabled="Boolean(disabled)"
			:aria-label="inputId"
			type="text"
			class="min-h-14 w-full rounded-[inherit] px-4 py-2 text-black shadow-form ring-primary-500 focus:ring disabled:placeholder:text-slate-200"
			:placeholder="placeholder"
		/>
	</div>
</template>
