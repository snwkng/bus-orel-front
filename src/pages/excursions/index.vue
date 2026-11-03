<script setup lang="ts">
useSeoMeta({
	title: 'Экскурсионные туры из Орла',
	ogTitle: 'Экскурсионные туры из Орла',
	description:
		'Погрузитесь в мир увлекательных путешествий с нашими экскурсионными турами из Орла. Откройте для себя уникальные маршруты, захватывающие места и незабываемые впечатления!',
	ogDescription:
		'Погрузитесь в мир увлекательных путешествий с нашими экскурсионными турами из Орла. Откройте для себя уникальные маршруты, захватывающие места и незабываемые впечатления!',
	keywords:
		'экскурсионные туры из Орла, туры по России из Орла, экскурсии по России, автобусные экскурсии из Орла, путешествия по России, культурные туры из Орла, интересные экскурсии из Орла, обзорные экскурсии по городам России, туры на выходные из Орла'
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
			<span class="text-neutral-900">Экскурсии</span>
		</nav>

		<div class="mb-8">
			<h1 class="typo-h1">Экскурсионные туры из Орла</h1>
			<p class="typo-body mt-2 text-neutral-500">
				Однодневные и многодневные поездки на комфортабельном автобусе
			</p>
		</div>

		<FeaturesSearchPill
			type="excursion"
			class="mb-6"
		/>

		<FeaturesExcursionTypeFilter class="mb-10" />

		<WidgetsExcursionsSection empty-text="Экскурсионных туров пока нет" />
	</section>
</template>
