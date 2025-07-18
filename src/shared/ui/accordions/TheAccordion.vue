<script setup lang="ts">

export interface IProps {
	items?: { title: string; content: string }[];
	parentId?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	items: () => [],
	parentId: ''
});

const activeItem = ref<null | { title: string; content: string }>(
	props.items[0]
);

const toggleItem = (title: string) => {
	if (title === activeItem.value?.title) {
		activeItem.value = null;
		return;
	}
	activeItem.value =
		props.items.find(
			(x: { title: string; content: string }) => title === x.title
		) || null;
	if (props?.parentId) {
		const parent = document.getElementById(props.parentId)
		parent?.scrollIntoView({ behavior: 'smooth' })
	}
};
</script>
<template>
	<div>
		<div
			v-for="item in props.items"
			:key="item.title"
			class="border-b border-solid border-slate-200 pb-4 pt-2"
		>
			<button
				type="button"
				class="group inline-flex w-full items-center justify-between pb-3 leading-8 transition duration-500 hover:text-deep-orange"
				:class="
					activeItem?.title === item.title
						? 'text-deep-orange'
						: 'dark:text-slate-300 text-slate-900'
				"
				@click="toggleItem(item.title)"
			>
				<span class="font-semibold">
					{{ item.title }}
				</span>
				<svg
					class="transition duration-500 group-hover:text-deep-orange"
					:class="
						activeItem?.title === item.title
							? 'rotate-180 text-deep-orange'
							: 'dark:text-slate-300 text-slate-900'
					"
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<div
				class="w-full overflow-hidden px-0 pr-4"
				:class="[{ hidden: activeItem?.title !== item.title }]"
			>
				<p class="text-base leading-6 dark:text-slate-200 whitespace-pre-wrap">
					{{ item.content }}
				</p>
			</div>
		</div>
	</div>
</template>
