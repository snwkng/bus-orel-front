<script setup lang="ts">
export interface IProps {
	btnType?: 'button' | 'submit';
}

withDefaults(defineProps<IProps>(), {
	btnTitle: '',
	btnType: 'button'
});
</script>
<template>
	<button
		:type="btnType"
		class="bg-primary-500 hover:bg-primary-500/95 min-h-14 min-w-40 rounded-xl px-4 py-2 text-xl font-semibold text-white transition-all"
	>
		<slot />
	</button>
</template>
