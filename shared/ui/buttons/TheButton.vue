<script setup lang="ts">
import { type ButtonHTMLAttributes } from 'vue';

export interface Props {
	btnTitle: string,
	btnType?: ButtonHTMLAttributes['type'],
}

withDefaults(defineProps<Props>(), {
	btnTitle: '',
	btnType: 'button' as ButtonHTMLAttributes['type']
})
</script>
<template>
	<button :type="btnType" :title="btnTitle" class="rounded-xl bg-deep-orange px-4 py-2 min-w-40 min-h-14 font-semibold text-xl hover:bg-deep-orange/95 transition-all text-white">
		{{ btnTitle }}
	</button>
</template>
