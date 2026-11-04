<script setup lang="ts">
import { getExcursionsCardList } from '@/entities/excursion/api/excursion.api';

const route = useRoute();
const routeRef = computed(() => route.query);

const { data, status, error } = getExcursionsCardList(routeRef);

const errorText = computed(() => getApiErrorMessage(error.value));
</script>

<template>
	<SharedSkeletonCarousel v-if="status === 'pending' && !data?.length" />
	<SharedSlidersCarouselSlider
		v-else-if="data?.length"
		title="Экскурсии из Орла"
		subtitle="Однодневные поездки по выходным"
		link-to="/excursions"
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
</template>
