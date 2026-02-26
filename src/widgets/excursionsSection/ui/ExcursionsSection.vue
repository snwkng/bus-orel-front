<script setup lang="ts">
import type { IExcursion } from '~/entities/excursion/model/types';

export interface IProps {
	title?: string;
	emptyText?: string;
	classes?: string;
}

defineProps<IProps>();

const route = useRoute();

const { data, pending } = await useFetch('/api/excursions', {
	query: computed(() => route.query),
	transform: (response: ApiResponse<IExcursion[]>) => {
		return (
			response?.data?.map((ex: IExcursion) => ({
				id: ex._id,
				title: ex.name,
				subtitle: ex.cities?.map((x: string) => x).join(', '),
				price: ex.price,
				image: ex.images?.[0] || '',
				date:
					ex?.excursionStartDates?.find(
						(date) => new Date(date) >= new Date()
					) || null
			})) || []
		);
	}
});
</script>
<template>
	<div class="dark:bg-gray-800 dark:text-slate-200">
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
				<NuxtLink to="/excursions" class="rounded-full p-2 bg-neutral-100 flex items-center justify-center transition-all hover:scale-105 hover:shadow-md">
					<Icon
						name="lucide:arrow-right"
						size="18"
						class="text-neutral-800"
					/>
				</NuxtLink>
			</div>
			<SharedFontsHeading
				v-else-if="emptyText?.length && !data?.length && !pending"
				variant="heading-xl"
				color="default"
				weight="bold"
				align="center"
			>
				{{ emptyText }}
			</SharedFontsHeading>
			<SharedSlidersBaseSlider>
				<!-- <EntitiesCard
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
				/> -->
				<SharedCardsBaseCard
					v-for="item in data"
					:id="item.id"
					:key="item.id"
					type="excursion"
					:title="item.title"
					:price="item.price"
					:date="item?.date ?? ''"
					:image-link="item.image"
				/>
			</SharedSlidersBaseSlider>
		</section>
	</div>
</template>
