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
	<div class="h-full w-full bg-deep-blue text-white dark:bg-gray-800">
		<div
			class="max-w-container flex flex-col items-center justify-center gap-y-6 py-5 lg:mt-[-56px] lg:h-[500px]"
		>
			<h1 class="mb-2 text-3xl font-bold sm:text-4xl">
				{{ title }}
			</h1>
			<FeaturesMainBtnGroup />
			<FeaturesSearchExcursionsForm v-if="searchSection === 'excursions'" />
			<FeaturesSearchToursForm v-else />
		</div>
	</div>
</template>
