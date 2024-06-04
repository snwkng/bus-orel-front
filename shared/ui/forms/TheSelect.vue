<script setup lang="ts">
import { EBorderRadius } from '@/shared/lib/types';

export interface Props {
	selectId: string;
	label: string;
	radius?: EBorderRadius | null;
	list?: SelectItem[];
}

const props = withDefaults(defineProps<Props>(), {
	selectId: '',
	label: '',
	radius: null,
	list: () => []
});

const emit = defineEmits<(e: 'change', value: SelectItem) => void>()

const value = ref<SelectItem>({});

watch(
	() => value.value,
	() => {
		emit('change', value.value)
	}
)

onMounted(() => {
	if (props.list.length) {
		const firstItem: SelectItem = props.list[0];
		value.value = firstItem;
	}
})
</script>
<template>
	<div class="relative min-w-40">
		<label
			:for="selectId"
			class="absolute top-[-24px] ml-3 block text-sm font-normal text-white"
		>{{ label }}</label>
		<select
			:id="selectId"
			v-model="value"
			class="min-h-14 w-full px-2 py-2 text-slate-500 ring-deep-orange focus:ring"
			:class="radius ?? ''"
		>
			<option v-for="item in list" :key="item?.id" :value="item">
				{{ item.name }}
			</option>
		</select>
	</div>
</template>
