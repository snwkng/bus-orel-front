<script setup lang="ts">
import { EBorderRadius } from '@/shared/lib/types'

export interface Props {
	inputId: string,
	label: string,
	type: string,
	placeholder: string,
	radius: EBorderRadius | null,
	disabled: string | boolean
}

withDefaults(defineProps<Props>(), {
	inputId: '',
	label: '',
	type: 'text',
	placeholder: '',
	radius: null,
	disabled: false
})
const inputFocus = ref(false)
</script>
<template>
	<div class="relative min-w-40">
		<Transition name="label-fade">
			<label v-show="inputFocus || disabled" :for="inputId" class="block absolute top-[-24px] ml-3 text-sm font-normal text-white">{{ label }}</label>
		</Transition>
		<input
			:id="inputId"
			:disabled="Boolean(disabled)"
			:aria-label="inputId"
			:type="type"
			class="px-4 py-2 text-black min-h-14 w-full disabled:placeholder:text-gray-200"
			:class="radius ?? ''"
			:placeholder="inputFocus ? '' : placeholder ?? label"
			@focus="inputFocus = true"
			@blur="inputFocus = false"
		>
	</div>
</template>
<style scoped>
.label-fade-enter-active {
  transition: all 0.3s ease-out;
}

.label-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.label-fade-enter-from,
.label-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
