<script setup lang="ts">
import { getToursCardList } from '~/entities/tour/api/tour.api';

const route = useRoute();
const routeRef = computed(() => route.query);

const { data } = getToursCardList(routeRef);
</script>

<template>
	<SharedSlidersCarouselSlider
		v-if="data?.length"
		title="Автобусные туры к морю"
		subtitle="Выезд из Орла на наших автобусах"
		link-to="/bus-tours"
		link-label="Все туры"
	>
		<SharedCardsTourCard
			v-for="item in data"
			:id="item.id"
			:key="item.id"
			type="bus-tour"
			:title="item.title"
			:price="item.price"
			:subtitle="item.subtitle"
			:image-link="item.image"
			class="w-[72vw] shrink-0 snap-start sm:w-[calc(50%_-_12px)] lg:w-[calc((100%_-_48px)/3)] xl:w-[calc((100%_-_72px)/4)]"
		/>
	</SharedSlidersCarouselSlider>
</template>
