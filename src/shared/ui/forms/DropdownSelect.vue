<script setup lang="ts">
interface IProps {
	modelValue: SelectItem;
	list?: SelectItem[];
	label: string;
	anyLabel?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	list: () => [],
	anyLabel: 'Любое'
});

const emit = defineEmits<(e: 'update:modelValue', value: SelectItem) => void>();

const open = ref(false);

const rootRef = useTemplateRef('root');
onClickOutside(rootRef, () => {
	open.value = false;
});

const onKeydown = (e: KeyboardEvent): void => {
	if (e.key === 'Escape') open.value = false;
};

onMounted(() => globalThis.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => globalThis.removeEventListener('keydown', onKeydown));

const options = computed<SelectItem[]>(() => [{} as SelectItem, ...props.list]);

const displayValue = computed(() => props.modelValue?.name || props.anyLabel);

const isSelected = (item: SelectItem): boolean =>
	(item.name || props.anyLabel) === (props.modelValue?.name || props.anyLabel);

const choose = (item: SelectItem): void => {
	emit('update:modelValue', item);
	open.value = false;
};
</script>

<template>
	<div
		ref="root"
		class="relative min-w-0 flex-1"
	>
		<button
			type="button"
			class="flex w-full flex-col justify-center rounded-2xl px-4 py-2 text-left transition-colors hover:bg-neutral-50 md:rounded-full"
			:aria-expanded="open"
			aria-haspopup="listbox"
			@click="open = !open"
		>
			<span class="text-xs font-semibold text-neutral-500">{{ label }}</span>
			<span class="flex items-center justify-between gap-2">
				<span class="truncate text-sm font-medium">{{ displayValue }}</span>
				<Icon
					name="lucide:chevron-down"
					class="size-4 shrink-0 text-neutral-400 transition-transform duration-200"
					:class="{ 'rotate-180': open }"
				/>
			</span>
		</button>

		<Transition
			enter-active-class="transition duration-150 ease-out"
			enter-from-class="translate-y-1 opacity-0"
			enter-to-class="translate-y-0 opacity-100"
			leave-active-class="transition duration-100 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div
				v-if="open"
				role="listbox"
				:aria-label="label"
				class="absolute top-full left-0 z-30 mt-2 max-h-64 w-full min-w-[220px] overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-1.5 shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
			>
				<button
					v-for="(opt, i) in options"
					:key="opt.id ?? opt.name ?? i"
					type="button"
					role="option"
					:aria-selected="isSelected(opt)"
					class="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-neutral-100"
					:class="
						isSelected(opt)
							? 'font-semibold text-neutral-900'
							: 'text-neutral-600'
					"
					@click="choose(opt)"
				>
					<span class="truncate">{{ opt.name || anyLabel }}</span>
					<Icon
						v-if="isSelected(opt)"
						name="lucide:check"
						class="text-secondary-600 size-4 shrink-0"
					/>
				</button>
			</div>
		</Transition>
	</div>
</template>
