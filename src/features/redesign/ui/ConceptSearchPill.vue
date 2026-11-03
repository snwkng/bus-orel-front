<script setup lang="ts">
const tabs = ['Туры к морю', 'Экскурсии', 'Аренда автобуса'];
const activeTab = ref(0);

const tabEls = ref<(HTMLElement | null)[]>([]);
const indicator = ref({ left: 0, width: 0, ready: false });

const updateIndicator = () => {
	const el = tabEls.value[activeTab.value];
	if (!el) return;
	indicator.value = { left: el.offsetLeft, width: el.offsetWidth, ready: true };
};

watch(activeTab, () => nextTick(updateIndicator));

onMounted(() => {
	updateIndicator();
	globalThis.addEventListener('resize', updateIndicator);
});

onBeforeUnmount(() => {
	globalThis.removeEventListener('resize', updateIndicator);
});
</script>

<template>
	<div class="max-w-[820px]">
		<div
			class="relative mb-4 inline-flex rounded-full bg-neutral-100 p-1"
			role="tablist"
		>
			<span
				class="absolute top-1 bottom-1 rounded-full bg-white shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
				:class="indicator.ready ? 'opacity-100' : 'opacity-0'"
				:style="{
					left: `${indicator.left}px`,
					width: `${indicator.width}px`
				}"
			/>
			<button
				v-for="(tab, i) in tabs"
				:key="tab"
				:ref="
					(el) => {
						tabEls[i] = el as HTMLElement | null;
					}
				"
				type="button"
				role="tab"
				:aria-selected="activeTab === i"
				class="relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200"
				:class="
					activeTab === i
						? 'text-neutral-900'
						: 'text-neutral-500 hover:text-neutral-900'
				"
				@click="activeTab = i"
			>
				{{ tab }}
			</button>
		</div>

		<form
			class="flex flex-col gap-2 rounded-3xl border border-neutral-200 bg-white p-2 shadow-lg transition-shadow duration-300 focus-within:shadow-xl md:flex-row md:items-center md:gap-0 md:rounded-full md:p-1.5"
		>
			<label
				class="flex flex-1 cursor-pointer flex-col rounded-2xl px-5 py-2.5 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 md:rounded-full"
			>
				<span class="text-xs font-semibold text-neutral-500">Откуда</span>
				<span class="text-sm font-medium">Орёл</span>
			</label>
			<div class="hidden h-8 w-px bg-neutral-200 md:block" />
			<label
				class="flex flex-1 cursor-pointer flex-col rounded-2xl px-5 py-2.5 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 md:rounded-full"
			>
				<span class="text-xs font-semibold text-neutral-500">Море</span>
				<span class="text-sm font-medium text-neutral-400">Любое</span>
			</label>
			<div class="hidden h-8 w-px bg-neutral-200 md:block" />
			<label
				class="flex flex-1 cursor-pointer flex-col rounded-2xl px-5 py-2.5 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100 md:rounded-full"
			>
				<span class="text-xs font-semibold text-neutral-500">Куда</span>
				<span class="text-sm font-medium text-neutral-400"
					>Город или отель</span
				>
			</label>
			<button
				type="submit"
				class="bg-primary-500 hover:bg-primary-600 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all active:scale-95 md:size-12 md:p-0 md:hover:scale-105"
				aria-label="Найти"
			>
				<Icon
					name="lucide:search"
					class="size-5"
				/>
				<span class="md:hidden">Найти</span>
			</button>
		</form>
	</div>
</template>
