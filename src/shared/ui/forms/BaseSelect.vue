<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { useTemplateRef } from 'vue';

export interface IProps {
	label?: string;
	list?: SelectItem[];
}

withDefaults(defineProps<IProps>(), {
	label: '',
	list: () => [],
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
	model.value = {} as SelectItem;
};
</script>
<template>
	<div
		ref="target"
		class="relative flex min-h-14 w-full items-center bg-white py-2 pl-4 text-slate-800 shadow-form transition-all focus:ring dark:bg-gray-600 dark:text-slate-300"
		:class="{ 'ring-2 ring-primary-500': showSelect }"
		@click="toggle"
		@keydown.enter="toggle"
	>
		<span
			v-if="model?.name"
			:title="model?.name"
			class="truncate w-[calc(100%-60px)]"
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
				:class="[
					'transition-all',
					{
						'text-slate-500': !showSelect,
						'rotate-180 text-slate-700 dark:text-slate-300': showSelect
					}
				]"
			/>
		</div>

		<Transition name="fade-top">
			<div
				v-show="showSelect"
				class="absolute right-0 top-[60px] z-10 flex max-h-[200px] w-full flex-col overflow-hidden rounded-xl bg-inherit pr-2 shadow-2xl"
			>
				<div class="overflow-y-auto mr-[-8px]">
					<slot>
						<div
							v-for="item in list"
							:key="item?.id"
							class="cursor-pointer px-2 py-4 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
							@click="update(item)"
							@keydown.enter="update(item)"
						>
							<span class="text-slate-800 dark:text-slate-400">
								{{ item.name }}
							</span>
						</div>
					</slot>
				</div>
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
