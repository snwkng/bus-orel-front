<script setup lang="ts">
const { BASE_URL } = useRuntimeConfig().public

const route = useRoute();

useHead({
	link: [{ rel: 'canonical', href: BASE_URL + (route.path === '/' ? '' : route.path) }],
})

useSeoMeta({
	title: 'Автобусные туры к морю из Орла',
	ogTitle: 'Автобусные туры к морю из Орла',
	description:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!',
	ogDescription:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!',
	keywords:
		'автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом'
})
</script>
<template>
	<div>
		<WidgetsSearchBusTours />
		<div class="px-base py-8 dark:bg-gray-800">
			<WidgetsBusToursSection class="pb-11" empty-text="Автобусных туров к морю пока нет" />
		</div>
	</div>
</template>
