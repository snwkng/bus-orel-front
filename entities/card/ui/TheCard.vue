<!-- eslint-disable no-restricted-syntax -->
<script setup lang="ts">
import type { ICard } from '../model/types';

const { BASE_URL } = useRuntimeConfig().public;

export interface Props extends ICard {
	type: string;
	image: string
}

const props = withDefaults(defineProps<Props>(), {
	type: 'tour',
	title: 'Отель Атлас',
	subtitle: 'Краснодарский край, Геленджик',
	price: 14000,
	image: ''
});
const link = computed(() => (props.type === 'excursion'
	? { name: 'excursions/excursion', params: { id: props.id } }
	: { name: 'bus-tours/bus-tour', params: { id: props.id } }));

const previewImage = ref<string | null>(null);

async function fetchImage () {
	try {
		if (props.image) {
			const response = await $fetch(
				`${BASE_URL}/api/s3/download/${props.image}`
			);
			const blob = (await response) as Blob; // Преобразуем ответ в Blob

			const reader = new FileReader();
			reader.onloadend = () => {
				if (typeof reader.result === 'string') {
					previewImage.value = reader.result;
				}
			};
			reader.readAsDataURL(blob);
		} else {
			throw new Error('no image')
		}
	} catch (error) {
		previewImage.value = ''
	}
}

fetchImage();
</script>
<template>
	<RouterLink
		:to="link"
		rel="noopener noreferrer nofollow"
	>
		<div class="w-full">
			<div
				class="mb-3 rounded-xl bg-cover brightness-100 w-full bg-slate-100"
				:class="[type === 'tour' ? 'h-72' : 'h-96']"
			>
				<div v-if="!previewImage" class="flex items-center justify-center w-full h-full">
					<span class="text-slate-400 font-semibold">Изображение отсутствует</span>
				</div>
				<img
					v-else
					class="mb-3 w-full h-full rounded-xl object-cover brightness-100"
					:src="previewImage?.toString()"
					:alt="props.subtitle"
					:title="props.title"
				/>
			</div>
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
