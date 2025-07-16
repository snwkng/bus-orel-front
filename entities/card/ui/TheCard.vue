<!-- eslint-disable no-restricted-syntax -->
<script setup lang="ts">
import type { ICard, IExcursionCard } from '../model/types';

export interface IProps {
	type: 'excursion' | 'tour';
}

const props = withDefaults(defineProps<IProps & ICard & IExcursionCard>(), {
	type: 'tour',
	title: 'Отель Атлас',
	subtitle: 'Краснодарский край, Геленджик',
	price: 14000,
	image: '',
	date: null
});
const link = computed(() => (props.type === 'excursion'
	? { name: 'excursions/excursion', params: { id: props.id } }
	: { name: 'bus-tours/bus-tour', params: { id: props.id } }));

const previewImage = ref<string | null>(null);

async function fetchImage () {
	try {
		if (props.image) {
			const response = await $fetch(
				`/api/s3/download/${props.image}`
			);
			if (response) {
				const blob = (await response) as Blob; // Преобразуем ответ в Blob

				const reader = new FileReader();
				reader.onloadend = () => {
					if (typeof reader.result === 'string') {
						previewImage.value = reader.result;
					}
				};
				reader.readAsDataURL(blob);
			}
		} else {
			throw new Error('no image');
		}
	} catch (error) {
		previewImage.value = '';
		// eslint-disable-next-line no-console
		console.error(error);
	}
}

// fetchImage();
</script>
<template>
	<RouterLink
		:to="link"
		rel="noopener noreferrer nofollow"
	>
		<div class="w-full">
			<div
				class="mb-3 w-full rounded-xl bg-slate-100 bg-cover brightness-100 dark:bg-gray-700"
				:class="[type === 'tour' ? 'h-72' : 'h-96']"
			>
				<div
					v-if="!image"
					class="flex h-full w-full items-center justify-center"
				>
					<span class="font-semibold text-slate-400">Изображение отсутствует</span>
				</div>
				<img
					v-else
					class="mb-3 h-full w-full rounded-xl object-cover brightness-100"
					:src="`/api/s3/download/${image}`"
					:alt="props.subtitle"
					:title="props.title"
					loading="lazy"
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
					<strong class="font-semibold text-black dark:text-slate-200">{{ price }}&#8381;</strong>
					за поездку
				</div>
			</div>
		</div>
	</RouterLink>
</template>
