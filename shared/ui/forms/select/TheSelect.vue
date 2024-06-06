<script setup lang="ts">
import { EBorderRadius } from '@/shared/lib/types';
import ArrowButton from '@/shared/ui/icons/ArrowButton.vue';

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

const showSelect = ref(false);

// const open = () => {
// 	showSelect.value = true;
// }
const close = () => {
	showSelect.value = false;
}

const toggle = () => {
	showSelect.value = !showSelect.value;
}

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
	<div
		v-click-away="close"
		class="relative min-w-[200px] shadow-form"
		:class="radius ?? ''"
		@click="toggle"
		@keydown.enter="toggle"
	>
		<div
			:for="selectId"
			class="absolute top-[-24px] ml-3 block text-sm font-normal text-white"
		>
			{{ label }}
		</div>
		<div
			class="flex items-center justify-between min-h-14 w-full px-2 py-2 text-slate-800 bg-white focus:ring relative"
			:class="[radius ?? '', { 'shadow-[0_0_0_2px] shadow-deep-orange': showSelect }]"
		>
			<span> {{ value.name ?? label }} </span>
			<arrow-button width="24px" height="24px" color="stroke-slate-500" :class="['transition-all', { 'rotate-180': showSelect }]" />
			<div
				class="flex-col absolute bg-inherit w-full right-0 top-[60px] z-10 rounded-b-2xl overflow-hidden shadow-2xl"
				:class="[showSelect ? 'flex' : 'hidden']"
			>
				<div v-for="item in list" :key="item?.id" class="px-2 py-4 cursor-pointer hover:bg-slate-200" @click="value = item" @keydown.enter="value = item">
					<span class="text-slate-800">{{ item.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
