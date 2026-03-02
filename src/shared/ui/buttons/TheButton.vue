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
		class="min-h-14 min-w-40 rounded-xl bg-primary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-primary-500/95"
	>
		<slot />
	</button>
</template>
