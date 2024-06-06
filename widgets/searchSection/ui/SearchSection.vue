<script setup lang="ts">
import SearchToursForm from '@/features/searchToursForm';
import SearchExcursionsForm from '@/features/searchExcursionsForm';

type goToSearch = 'busTours' | 'excursions';

const title = ref('Поиск автобусных туров к морю из Орла');
const searchSection = ref('busTours');

const showSearch = (showSearchUi: goToSearch) => {
	if (showSearchUi === 'excursions') {
		searchSection.value = 'excursions';
		title.value = 'Поиск экскурсионных туров из Орла';
	} else {
		searchSection.value = 'busTours';
		title.value = 'Поиск автобусных туров к морю из Орла';
	}
}
</script>
<template>
	<div class="px-base w-full h-96 bg-deep-blue flex flex-col items-center justify-center gap-y-6 text-white">
		<h1 class=" font-bold text-4xl mb-2">
			{{ title }}
		</h1>
		<div class="flex gap-1 items-center justify-start py-3">
			<button
				type="button"
				class="px-4 py-2 transition-all rounded-xl"
				:class="[searchSection === 'busTours' ? 'bg-white text-slate-900' : 'text-white bg-blue-900/20 hover:bg-blue-900/35']"
				@click="showSearch('busTours')"
			>
				Туры к морю
			</button>
			<button
				type="button"
				class="px-4 py-2 transition-all rounded-xl"
				:class="[searchSection === 'excursions' ? 'bg-white text-slate-900' : 'text-white bg-blue-900/20 hover:bg-blue-900/35']"
				@click="showSearch('excursions')"
			>
				Экскурсии
			</button>
			<router-link to="#bus-rent" class="px-4 py-2 ml-5 text-white bg-blue-200/20  transition-all rounded-xl">
				Аренда автобуса
			</router-link>
		</div>
		<search-excursions-form v-if="searchSection === 'excursions'" />
		<search-tours-form v-else />
	</div>
</template>
