<script setup lang="ts">
import { getExcursionsTypesList } from '@/entities/excursion/api/excursion.api';

const route = useRoute();
const router = useRouter();

const { data: types } = await getExcursionsTypesList();

const activeType = computed(() => (route.query.type as string) ?? '');

const setType = (name: string): void => {
	router.push({ query: { ...route.query, type: name || undefined } });
};
</script>

<template>
	<div
		v-if="types?.length"
		class="flex flex-wrap items-center gap-2"
	>
		<span class="typo-caption mr-1 font-semibold text-neutral-500">Тип:</span>
		<button
			type="button"
			class="typo-small rounded-full border px-3.5 py-1.5 font-medium transition-all active:scale-95"
			:class="
				!activeType
					? 'border-secondary-600 bg-secondary-600 text-white'
					: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
			"
			@click="setType('')"
		>
			Все типы
		</button>
		<button
			v-for="item in types"
			:key="item.id"
			type="button"
			class="typo-small rounded-full border px-3.5 py-1.5 font-medium transition-all active:scale-95"
			:class="
				activeType === item.name
					? 'border-secondary-600 bg-secondary-600 text-white'
					: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
			"
			@click="setType(item.name)"
		>
			{{ item.name }}
		</button>
	</div>
</template>
