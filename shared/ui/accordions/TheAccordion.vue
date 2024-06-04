<script setup lang="ts">

export interface Props {
	items: string[],
}

const props = withDefaults(defineProps<Props>(), {
	items: () => []
});

const activeItem = ref(null as any)

const accordionItems = computed(() => props.items.map((x: string, index: number) => ({
	title: `День ${index + 1}`,
	content: x
})))

const toggleItem = (title: string) => {
	activeItem.value =
  accordionItems.value.find((x: {title: string, content: string}) => title === x.title) ||
  null
}
</script>
<template>
	<div>
		<div
			v-for="item in accordionItems"
			:key="item.title"
			class="border-b border-solid border-gray-200 pb-4"
		>
			<button
				type="button"
				class="inline-flex w-full items-center justify-between leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
				@click="toggleItem(item.title)"
			>
				<h5 class="font-semibold">
					{{ item.title }}
				</h5>
				<svg
					class="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
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
				<p class="text-base leading-6">
					{{ item.content }}
				</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.accordion-active {
  @apply overflow-auto
}
.accordion-item {
  @apply overflow-hidden
}
</style>
