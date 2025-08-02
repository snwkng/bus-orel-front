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
		? { name: 'excursions/excursion', params: { id: props.id } }
		: { name: 'bus-tours/bus-tour', params: { id: props.id } }
);
</script>
<template>
	<NuxtLink
		:to="link"
	>
		<div class="w-full">
			<div
				class="mb-3 w-full rounded-xl bg-slate-100 bg-cover brightness-100 dark:bg-gray-700"
				:class="[type === 'tour' ? 'h-72' : 'h-96']"
			>
				<NuxtImg
					class="mb-3 w-full rounded-xl object-cover brightness-100 h-full"
					:src="`/image/${image}`"
					:alt="props.subtitle"
					:title="props.title"
					:height="type === 'tour' ? 288 : 384"
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
				<div
					v-if="date"
					class="font-normal text-slate-500 dark:text-slate-300"
				>
					{{ $dayjs(date).format('DD.MM.YYYY') }}
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
