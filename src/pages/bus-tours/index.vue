<script setup lang="ts">
useSeoMeta({
	title: 'Автобусные туры к морю из Орла',
	ogTitle: 'Автобусные туры к морю из Орла',
	description:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!',
	ogDescription:
		'Автобусные туры к морю из Орла. Красивые маршруты и незабываемые моменты. Забронируйте свой тур уже сегодня и окунитесь в мир солнца и моря!',
	keywords:
		'автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом'
});
</script>
<template>
	<section class="mx-auto w-full max-w-[1200px] px-6 pt-10 pb-16">
		<nav
			class="typo-small mb-5 flex items-center gap-1.5 text-neutral-500"
			aria-label="Хлебные крошки"
		>
			<NuxtLink
				:to="{ name: 'index' }"
				class="transition-colors hover:text-neutral-900"
				>Главная</NuxtLink
			>
			<Icon
				name="lucide:chevron-right"
				class="size-3.5"
			/>
			<span class="text-neutral-900">Туры к морю</span>
		</nav>

		<div class="mb-8">
			<h1 class="typo-h1">Автобусные туры к морю из Орла</h1>
			<p class="typo-body mt-2 text-neutral-500">
				Выезд из Орла на наших автобусах, без пересадок
			</p>
		</div>

		<FeaturesSearchPill
			type="tour"
			class="mb-10"
		/>

		<WidgetsToursSection empty-text="Автобусных туров к морю пока нет" />
	</section>
</template>
