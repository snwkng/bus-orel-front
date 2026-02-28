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
	<div class="dark:bg-gray-800">
		<section
			v-if="data?.length || emptyText"
			:class="['max-w-container', classes]"
		>
			<div
				v-if="title && data?.length"
				class="flex gap-4 items-baseline mb-6"
			>
				<SharedFontsHeading
					variant="heading-xl"
					color="default"
					weight="bold"
				>
					{{ title }}
				</SharedFontsHeading>
				<NuxtLink
					to="/bus-tours"
					class="flex items-center justify-center rounded-full bg-neutral-100 p-2 transition-all hover:scale-105 hover:shadow-md"
				>
					<Icon
						name="lucide:arrow-right"
						size="18"
						class="text-neutral-800"
					/>
				</NuxtLink>
			</div>
			<SharedFontsHeading
				v-else-if="emptyText.length && !data?.length && !pending"
				variant="heading-xl"
				color="default"
				weight="bold"
				align="center"
			>
				{{ emptyText }}
			</SharedFontsHeading>
			<SharedSlidersBaseSlider v-if="data?.length">
				<SharedCardsBaseCard
					v-for="item in data"
					:id="item.id"
					:key="item.id"
					type="bus-tour"
					:title="item.title"
					:price="item.price"
					:subtitle="item.subtitle"
					:image-link="item.image ?? ''"
				/>
			</SharedSlidersBaseSlider>
		</section>
	</div>
</template>
