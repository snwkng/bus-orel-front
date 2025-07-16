<script setup lang="ts">
export interface IProps {
	inputId?: string;
	label?: string;
	type?: string;
	placeholder?: string;
	disabled?: boolean;
	classes?: string;
}

withDefaults(defineProps<IProps>(), {
	inputId: '',
	label: '',
	type: 'text',
	placeholder: '',
	disabled: false,
	classes: ''
});
const inputFocus = ref(false);
</script>
<template>
	<div class="relative w-full min-w-40 md:w-auto">
		<Transition name="label-fade">
			<label
				v-if="inputFocus || (disabled && label)"
				:for="inputId"
				class="absolute top-[-24px] hidden px-4 text-sm font-normal text-white md:block"
			>
				{{ label }}
			</label>
		</Transition>
		<input
			:id="inputId"
			:disabled="Boolean(disabled)"
			:aria-label="inputId"
			:type="type"
			class="min-h-14 w-full px-4 py-2 text-black shadow-form ring-deep-orange focus:ring disabled:placeholder:text-slate-200"
			:class="classes"
			:placeholder="inputFocus ? '' : (placeholder ?? label)"
			@focus="inputFocus = true"
			@blur="inputFocus = false"
		/>
	</div>
</template>
