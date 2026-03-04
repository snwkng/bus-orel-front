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
	<div>
		<WidgetsSearchSection
			title="Экскурсионные туры из Орла"
			search-control="excursion"
		/>
		<div class="py-8 dark:bg-gray-800">
			<WidgetsExcursionsSection
				class="pb-11"
				type="grid"
			>
				<template #title="{ dataLength }">
					<template v-if="!dataLength">
						<LazySharedFontsHeading
							variant="heading-xl"
							color="default"
							weight="bold"
						>
							Экскурсионных туров пока нет
						</LazySharedFontsHeading>
					</template>
				</template>
			</WidgetsExcursionsSection>
		</div>
	</div>
</template>
