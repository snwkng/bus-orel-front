<script setup lang="ts">
import { EBorderRadius } from '@/shared/lib/types'

export interface Props {
	selectId: string,
	label: string,
	radius?: EBorderRadius | null,
	list?: SelectItem[],
}

withDefaults(defineProps<Props>(), {
	selectId: '',
	label: '',
	radius: null,
	list: () => []
})

</script>
<template>
	<div class="relative min-w-40">
		<label :for="selectId" class="block absolute top-[-24px] ml-3 text-sm font-normal text-white">{{ label }}</label>
		<select
			:id="selectId"
			class="px-2 py-2 text-gray-500 min-h-14 w-full focus:ring ring-deep-orange"
			:class="radius ?? ''"
		>
			<option v-for="item in list" :key="item?.id">
				{{ item.name }}
			</option>
		</select>
	</div>
</template>
