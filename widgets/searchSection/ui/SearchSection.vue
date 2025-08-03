<script setup lang="ts">
const title = ref('Поиск автобусных туров к морю из Орла');

const store = useMainBtnGroupStore();

const { searchSection } = storeToRefs(store);

watch(
	() => searchSection.value,
	() => {
		if (searchSection.value === 'excursions') {
			title.value = 'Поиск экскурсионных туров из Орла';
		} else {
			title.value = 'Поиск автобусных туров к морю из Орла';
		}
	}
);
</script>
<template>
	<div
		class="h-full w-full bg-deep-blue text-white dark:bg-gray-800"
	>
		<div class="flex flex-col items-center justify-center gap-y-6 lg:h-96 py-5 max-w-container">
			<h1 class="mb-2 text-3xl font-bold sm:text-4xl">
				{{ title }}
			</h1>
			<FeaturesMainBtnGroup />
			<FeaturesSearchExcursionsForm v-if="searchSection === 'excursions'" />
			<FeaturesSearchToursForm v-else />
		</div>
	</div>
</template>
