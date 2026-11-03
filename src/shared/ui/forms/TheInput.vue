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
				class="absolute top-[-28px] left-4 hidden text-sm font-normal text-white md:block"
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
			class="shadow-form ring-primary-500 min-h-14 w-full rounded-[inherit] px-4 py-2 text-black focus:ring-2 disabled:placeholder:text-slate-200"
			:placeholder="placeholder"
		/>
	</div>
</template>
