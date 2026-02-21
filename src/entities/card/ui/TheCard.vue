<!-- eslint-disable no-restricted-syntax -->
<script setup lang="ts">
import type { ICard, IExcursionCard } from '../model/types';

export interface IProps {
	type?: 'excursion' | 'tour';
}

const props = withDefaults(defineProps<IProps & ICard & IExcursionCard>(), {
	type: 'tour',
	title: 'Отель Атлас',
	subtitle: 'Краснодарский край, Геленджик',
	price: 14000,
	image: '',
	date: null
});
const link = computed(() =>
	props.type === 'excursion'
		? { name: 'excursions-id', params: { id: props.id } }
		: { name: 'bus-tours-id', params: { id: props.id } }
);
</script>
<template>
	<NuxtLink :to="link">
		<div class="w-full">
			<div
				class="relative mb-3 w-full rounded-3xl bg-slate-100 bg-cover brightness-100 dark:bg-gray-700 overflow-hidden"
				:class="[type === 'tour' ? 'h-60' : 'h-96']"
			>
				<div
					v-if="date"
					class="absolute left-3 top-3 z-10 rounded-xl bg-gray-200 px-3 py-1 font-semibold text-slate-700 shadow-md dark:bg-slate-700 dark:text-slate-300"
				>
					{{ $dayjs(date).format('DD.MM.YYYY') }}
				</div>
				<NuxtImg
					class="mb-3 h-full w-full object-cover brightness-100"
					:src="`/image/${image}`"
					:alt="props.subtitle"
					:title="props.title"
					:height="type === 'tour' ? 236 : 384"
					loading="lazy"
					fit="inside"
				/>
			</div>
			<div class="card-content">
				<h3 class="font-semibold">
					{{ title }}
				</h3>
				<div class="font-normal text-slate-500 dark:text-slate-300">
					{{ subtitle }}
				</div>
				<div class="font-normal text-slate-500 dark:text-slate-300">
					от
					<strong class="font-semibold text-black dark:text-slate-200">
						{{ price }}&#8381;
					</strong>
					за поездку
				</div>
			</div>
		</div>
	</NuxtLink>
</template>
