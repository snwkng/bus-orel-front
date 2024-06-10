<script setup lang="ts">

export interface Props {
	inputId: string,
	label: string,
	type: string,
	placeholder: string,
	disabled: string | boolean,
	classes?: string
}

withDefaults(defineProps<Props>(), {
	inputId: '',
	label: '',
	type: 'text',
	placeholder: '',
	disabled: false,
	classes: ''
})
const inputFocus = ref(false)
</script>
<template>
	<div class="relative min-w-40 w-full md:w-auto">
		<Transition name="label-fade">
			<label v-if="inputFocus || disabled && label" :for="inputId" class="absolute top-[-24px] px-4 text-sm font-normal text-white hidden md:block">{{ label }}</label>
		</Transition>
		<input
			:id="inputId"
			:disabled="Boolean(disabled)"
			:aria-label="inputId"
			:type="type"
			class="px-4 py-2 text-black min-h-14 w-full disabled:placeholder:text-slate-200 focus:ring ring-deep-orange shadow-form"
			:class="classes"
			:placeholder="inputFocus ? '' : placeholder ?? label"
			@focus="inputFocus = true"
			@blur="inputFocus = false"
		>
	</div>
</template>
