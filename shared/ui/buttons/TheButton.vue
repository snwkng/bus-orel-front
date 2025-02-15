<script setup lang="ts">
import { type ButtonHTMLAttributes } from 'vue';

export interface Props {
	btnTitle: string;
	btnType?: ButtonHTMLAttributes['type'];
}

withDefaults(defineProps<Props>(), {
	btnTitle: '',
	btnType: 'button' as ButtonHTMLAttributes['type']
});
</script>
<template>
	<button
		:type="btnType"
		:title="btnTitle"
		class="min-h-14 min-w-40 rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95"
	>
		{{ btnTitle }}
	</button>
</template>
