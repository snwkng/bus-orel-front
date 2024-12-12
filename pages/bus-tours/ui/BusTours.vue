<script setup lang="ts">
useHead({
	meta: [
		{
			name: 'description',
			content:
				'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!'
		},
		{
			name: 'keywords',
			content:
				'автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом'
		}
	]
});
</script>
<template>
	<div>
		<WidgetsSearchBusTours />
		<div class="px-base py-8">
			<WidgetsBusToursSection class="pb-11" empty-text="Автобусных туров к морю пока нет" />
		</div>
	</div>
</template>
