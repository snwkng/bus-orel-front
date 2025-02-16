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
		class="px-base flex h-full w-full flex-col items-center justify-center gap-y-6 dark:bg-gray-800 bg-deep-blue py-5 text-white lg:h-96"
	>
		<h1 class="mb-2 text-3xl sm:text-4xl font-bold">
			{{ title }}
		</h1>
		<FeaturesMainBtnGroup />
		<FeaturesSearchExcursionsForm v-if="searchSection === 'excursions'" />
		<FeaturesSearchToursForm v-else />
	</div>
</template>
