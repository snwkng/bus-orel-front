<script setup lang="ts">
import type { IExcursion } from '~/entities/excursion/model/types';

export interface IProps {
	title?: string;
	emptyText?: string;
	classes?: string;
}

defineProps<IProps>();

const route = useRoute();

const { data } = await useFetch('/api/excursions', {
	query: computed(() => route.query),
	transform: (response: ApiResponse<IExcursion[]>) => {
		return response?.data?.map((ex: IExcursion) => ({
			id: ex._id,
			title: ex.name,
			subtitle: ex.cities?.map((x: string) => x).join(', '),
			price: ex.price,
			image: ex.images?.[0] || '',
			date:
				ex?.excursionStartDates?.find((date) => new Date(date) >= new Date()) ||
				null
		})) || [];
	}
});
</script>
<template>
	<div class="dark:bg-gray-800 dark:text-slate-200">
		<section
			v-if="data?.length || emptyText"
			:class="['max-w-container', classes]"
		>
			<h2
				v-if="title && data?.length"
				class="mb-6 text-2xl font-bold"
			>
				{{ title }}
			</h2>
			<h2
				v-else-if="emptyText?.length && !data?.length"
				class="text-center text-2xl font-bold"
			>
				{{ emptyText }}
			</h2>
			<SharedUiTheGrid>
				<EntitiesCard
					v-for="item in data"
					:id="item.id"
					:key="item.id"
					:title="item.title"
					:subtitle="item.subtitle"
					:price="item.price"
					:image="item.image"
					:date="item?.date"
					type="excursion"
					image-path="excursions"
				/>
			</SharedUiTheGrid>
		</section>
	</div>
</template>
