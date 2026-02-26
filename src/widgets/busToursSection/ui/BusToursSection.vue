<script setup lang="ts">
import type { ITour } from '~/entities/tour/model/types';

export interface Props {
	title?: string;
	emptyText?: string;
	classes?: string;
}

withDefaults(defineProps<Props>(), {
	title: '',
	emptyText: '',
	classes: ''
});

const route = useRoute();

const { data, pending } = await useFetch('/api/hotels', {
	query: computed(() => route.query),
	transform: (response: ApiResponse<ITour[]>) => {
		return response?.data?.map((tour: ITour) => ({
			id: tour._id,
			title: tour.name,
			subtitle: tour?.address.city ?? '',
			price: tour.minPrice,
			image: tour?.images?.[0]
		}));
	}
});
</script>
<template>
	<div class="dark:bg-gray-800 dark:text-slate-200">
		<section
			v-if="data?.length || emptyText"
			:class="['max-w-container', classes]"
		>
			<SharedFontsHeading
				v-if="title && data?.length"
				variant="heading-xl"
				color="default"
				weight="bold"
				class="mb-6"
			>
				{{ title }}
			</SharedFontsHeading>
			<SharedFontsHeading
				v-else-if="emptyText.length && !data?.length && !pending"
				variant="heading-xl"
				color="default"
				weight="bold"
				align="center"
			>
				{{ emptyText }}
			</SharedFontsHeading>
			<SharedTheGrid v-if="data?.length">
				<EntitiesCard
					v-for="item in data"
					:id="item.id"
					:key="item.id"
					:title="item.title"
					:subtitle="item.subtitle"
					:price="item.price"
					:image="item?.image ?? ''"
					:date="null"
					type="tour"
					image-path="hotels"
				/>
			</SharedTheGrid>
		</section>
	</div>
</template>
