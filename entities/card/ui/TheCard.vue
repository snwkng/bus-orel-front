<script setup lang="ts">
import type { ICard } from '../model/types';

export interface Props extends ICard {
	type: string;
	imagePath: string;
}

const props = withDefaults(defineProps<Props>(), {
	type: 'tour',
	imagePath: 'hotels',
	title: 'Отель Атлас',
	subtitle: 'Краснодарский край, Геленджик',
	price: 14000,
	images: () => []
});

const runtimeConfig = useRuntimeConfig()

const link = computed(() => (props.type === 'excursion'
	? { name: 'excursions/excursion', params: { id: props.id } }
	: { name: 'bus-tours/bus-tour', params: { id: props.id } }
));
</script>
<template>
	<RouterLink :to="link" rel="noopener noreferrer nofollow">
		<div class="w-full">
			<img
				class="mb-3 w-full rounded-xl bg-cover object-cover brightness-100"
				:class="[type === 'tour' ? 'h-72' : 'h-96']"
				:src="`${runtimeConfig.public.BASE_URL}/public/images/${imagePath}/${props?.images[0]?.name ?? ''}`"
				:alt="props.subtitle"
				:title="props.title"
			/>
			<div class="card-content">
				<h3 class="font-semibold">
					{{ title }}
				</h3>
				<div class="font-normal text-slate-500">
					{{ subtitle }}
				</div>
				<div class="font-normal text-slate-500">
					от
					<strong class="font-semibold text-black">{{ price }} &#8381;</strong>
					за поездку
				</div>
			</div>
		</div>
	</RouterLink>
</template>
