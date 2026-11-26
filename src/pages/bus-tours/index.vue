<script setup lang="ts">
useSeoMeta({
	title: 'Автобусные туры к морю из Орла',
	ogTitle: 'Автобусные туры к морю из Орла',
	description:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!',
	ogDescription:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!'
});

useHead({
	meta: [
		{
			name: 'keywords',
			content:
				'автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом'
		}
	]
});
</script>
<template>
	<section class="mx-auto w-full max-w-[1200px] px-6 pt-10 pb-16">
		<SharedBreadcrumbsBaseBreadcrumbs
			:items="[
				{ label: 'Главная', to: { name: 'index' } },
				{ label: 'Туры к морю' }
			]"
		/>

		<div class="mb-8">
			<h1 class="typo-h1">Автобусные туры к морю из Орла</h1>
			<p class="typo-body mt-2 text-neutral-500">
				Выезд из Орла без пересадок, заселение в проверенные отели
			</p>
		</div>

		<FeaturesSearchPill
			type="tour"
			class="mb-10"
		/>

		<WidgetsCatalogSection kind="tour" />
	</section>
</template>
