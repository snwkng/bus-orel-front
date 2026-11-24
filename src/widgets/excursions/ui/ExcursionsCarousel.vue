<script setup lang="ts">
import { getExcursionsCardList } from '@/entities/excursion/api/excursion.api';
import type { LocationQuery } from 'vue-router';

interface IProps {
	// фильтр по типу экскурсии (query `type` в API); без него — общая карусель
	type?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	type: undefined
});

const route = useRoute();

const query = computed<LocationQuery>(() =>
	props.type ? { type: props.type } : route.query
);

const { data, status, error } = getExcursionsCardList(query);

const errorText = computed(() => getApiErrorMessage(error.value));

const visible = computed(
	() => status.value === 'pending' || !!data.value?.length || !!error.value
);

const title = computed(() => props.type ?? 'Экскурсии из Орла');

const subtitle = computed(() =>
	props.type ? 'Экскурсии из Орла' : 'Однодневные поездки по выходным'
);

const linkTo = computed(() =>
	props.type
		? `/excursions?type=${encodeURIComponent(props.type)}`
		: '/excursions'
);
</script>
<template>
	<section
		v-if="visible"
		class="border-t border-neutral-100 py-14"
	>
		<div class="mx-auto w-full max-w-[1200px] px-6">
			<SharedSkeletonCarousel v-if="status === 'pending' && !data?.length" />
			<SharedSlidersCarouselSlider
				v-else-if="data?.length"
				:title="title"
				:subtitle="subtitle"
				:link-to="linkTo"
				link-label="Все экскурсии"
			>
				<SharedCardsBaseCard
					v-for="item in data"
					:id="item.id"
					:key="item.id"
					type="excursion"
					:title="item.title"
					:price="item.price"
					:subtitle="item.subtitle"
					:date="item.date"
					:image-link="item.image"
					class="w-[72vw] shrink-0 snap-start sm:w-[calc(50%_-_12px)] lg:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
				/>
			</SharedSlidersCarouselSlider>
			<SharedAlertsBaseAlert
				v-else-if="error"
				mode="error"
				icon-name="circle-alert"
			>
				Не удалось загрузить экскурсии{{
					errorText ? `: ${errorText}` : '. Попробуйте обновить страницу позже'
				}}
			</SharedAlertsBaseAlert>
		</div>
	</section>
</template>
