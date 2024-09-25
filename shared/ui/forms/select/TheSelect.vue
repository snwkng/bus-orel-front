<script setup lang="ts">
import ArrowButton from '@/shared/ui/icons/ArrowButton.vue';

export interface Props {
	selectId: string;
	label: string;
	list?: SelectItem[];
	queryName?: string;
	classes?: string;
}

const props = withDefaults(defineProps<Props>(), {
	selectId: '',
	label: '',
	list: () => [],
	queryName: '',
	classes: ''
});

const route = useRoute();

const emit = defineEmits<(e: 'change', value: SelectItem) => void>();

const value = ref<SelectItem>({});

const showSelect = ref(false);

const close = () => {
	showSelect.value = false;
};

const toggle = () => {
	showSelect.value = !showSelect.value;
};

watch(
	() => props.list,
	() => {
		if (
			props.list.length &&
			value.value?.name &&
			!props.list.find((item: SelectItem) => value.value.name === item.name)
		) {
			value.value = {};
		}
	}
);

watch(
	() => value.value,
	() => {
		// console.log(value.value)
		emit('change', value.value);
	}
);

onMounted(() => {
	if (route.query[props.queryName]) {
		value.value =
			props.list.find(
				(item: SelectItem) => item.name === route.query[props.queryName]
			) || {};
	}
});
</script>
<template>
	<div
		v-click-away="close"
		class="relative w-full min-w-[200px] md:w-auto"
		@click="toggle"
		@keydown.enter="toggle"
	>
		<Transition name="label-fade">
			<div
				v-if="showSelect"
				:for="selectId"
				class="absolute top-[-24px] ml-3 hidden text-sm font-normal text-white md:block"
			>
				{{ label }}
			</div>
		</Transition>
		<div
			class="relative flex min-h-14 w-full items-center bg-white px-4 py-2 text-slate-800 shadow-form focus:ring"
			:class="[classes, { 'ring-2 ring-deep-orange': showSelect }]"
		>
			<span v-if="value.name">{{ value.name }}</span>
			<span v-else-if="!showSelect" class="text-slate-400">{{ label }}</span>
			<arrow-button
				width="24px"
				height="24px"
				color="stroke-slate-500"
				:class="[
					'absolute right-2 transition-all',
					{ 'rotate-180': showSelect },
				]"
			/>
			<div
				class="absolute right-0 top-[60px] z-10 w-full flex-col overflow-hidden rounded-b-2xl bg-inherit shadow-2xl"
				:class="[showSelect ? 'flex' : 'hidden']"
			>
				<div
					v-for="item in list"
					:key="item?.id"
					class="cursor-pointer px-2 py-4 hover:bg-slate-200"
					@click="value = item"
					@keydown.enter="value = item"
				>
					<span class="text-slate-800">{{ item.name }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
