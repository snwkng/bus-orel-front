<script setup lang="ts">
import type { ConceptCardItem } from '../lib/conceptData';

interface IProps {
	item: ConceptCardItem;
	to: string;
}

defineProps<IProps>();
</script>

<template>
	<article class="group w-full cursor-pointer">
		<NuxtLink
			:to="to"
			class="block"
		>
			<div class="relative mb-3">
				<img
					v-if="item.image"
					:src="item.image"
					:alt="item.title"
					class="aspect-[4/3] w-full rounded-xl object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-md"
				/>
				<div
					v-else
					class="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-xl bg-neutral-100 transition-shadow duration-300 group-hover:shadow-md"
				>
					<Icon
						name="lucide:palmtree"
						class="text-secondary-300 size-8 transition-transform duration-300 group-hover:scale-110"
					/>
					<span class="text-sm font-semibold text-neutral-300">ГалаТур</span>
				</div>
				<span
					v-if="item.date"
					class="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-neutral-800 shadow-sm"
				>
					{{ item.date }}
				</span>
			</div>
			<h3
				class="truncate text-[15px] leading-snug font-semibold group-hover:underline"
			>
				{{ item.title }}
			</h3>
			<p class="mt-0.5 truncate text-sm text-neutral-500">
				{{ item.meta }}
			</p>
			<p class="mt-1.5 text-[15px]">
				<span class="font-bold">от {{ item.price }} ₽</span>
				<span class="text-neutral-500"> за человека</span>
			</p>
		</NuxtLink>
	</article>
</template>
