<script setup lang="ts">
const props = defineProps({
	inputId: { type: String, default: '1' },
	type: { type: String, default: 'text' },
	label: { type: String, default: '' }
})

const inputFocus = ref(false)
</script>
<template>
	<div class="relative">
		<label v-show="inputFocus" :for="inputId" class="block mb-2 text-sm font-normal text-white">{{ label }}</label>
		<input
			:id="inputId"
			:type="type"
			class="rounded-xl px-4 py-2 text-black min-h-14"
			:placeholder="inputFocus ? '' : label"
			required
			@focus="inputFocus = true"
			@blur="inputFocus = false"
		>
	</div>
</template>
