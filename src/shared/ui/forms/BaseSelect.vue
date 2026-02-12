<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';

export interface IProps {
	label?: string;
	list?: SelectItem[];
	roudingType?: 'left' | 'right' | 'all' | 'none';
}

withDefaults(defineProps<IProps>(), {
	label: '',
	list: () => [],
	roudingType: 'none'
});

const model = defineModel<SelectItem>();
const target = useTemplateRef('target');
const showSelect = ref(false);

onClickOutside(target, () => close());

const update = (val: SelectItem) => (model.value = val);

const close = () => {
	showSelect.value = false;
};

const toggle = () => {
	showSelect.value = !showSelect.value;
};

const clearModel = () => {
	model.value = {};
};
</script>
<template>
	<div
		ref="target"
		class="relative flex min-h-14 w-full items-center bg-white py-2 pl-4 pr-8 text-slate-800 shadow-form focus:ring dark:bg-gray-600 dark:text-slate-300 xl:min-w-[280px] transition-all"
		:class="{ 'ring-2 ring-deep-orange': showSelect }"
		@click="toggle"
		@keydown.enter="toggle"
	>
		<span
			v-if="model?.name"
			:title="model?.name"
			class="w-[200px] overflow-hidden truncate text-ellipsis text-nowrap"
		>
			{{ model.name }}
		</span>
		<div
			:class="{
				'absolute hidden translate-y-[-45px] text-sm font-normal text-white md:block':
					!!(showSelect || model?.name)
			}"
			class="text-slate-400 transition-all duration-200 ease-out dark:text-slate-300"
		>
			{{ label }}
		</div>
		<div class="absolute right-2 flex items-center space-x-1">
			<Icon
				v-if="model?.name"
				name="lucide:x"
				size="24"
				class="cursor-pointer text-slate-500 transition-all hover:text-slate-700 dark:hover:text-slate-300"
				@click.stop="clearModel"
			/>
			<Icon
				name="lucide:chevron-down"
				size="24"
				:class="['text-slate-500 transition-all', { 'rotate-180': showSelect }]"
			/>
		</div>

		<Transition name="fade-top">
			<div
				v-show="showSelect"
				class="absolute right-0 top-[60px] z-10 flex max-h-[200px] w-full flex-col overflow-hidden overflow-y-auto rounded-xl bg-inherit shadow-2xl"
			>
				<slot>
					<div
						v-for="item in list"
						:key="item?.id"
						class="cursor-pointer px-2 py-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						@click="update(item)"
						@keydown.enter="update(item)"
					>
						<span class="text-slate-800 dark:text-slate-400">
							{{ item.name }}
						</span>
					</div>
				</slot>
			</div>
		</Transition>
	</div>
</template>

<style lang="scss" scoped>
.fade-top {
	&-enter-active {
		transition: all 0.1s ease-out;
	}

	&-leave-active {
		transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
	}

	&-enter-from,
	&-leave-to {
		opacity: 0;
		transform: translateY(-5px);
	}
}
</style>
