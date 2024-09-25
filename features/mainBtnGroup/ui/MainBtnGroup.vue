<script setup lang="ts">
import type { goToSearch } from '../model/types';

const store = useMainBtnGroupStore();

const { toggleSearch } = store;

const { searchSection } = storeToRefs(store);

const showSearch = (search: goToSearch) => {
	toggleSearch(search);
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
};
</script>

<template>
	<div ref="mainBtnGroup" class="flex items-center justify-start gap-1 py-3">
		<button
			type="button"
			class="rounded-xl px-4 py-2 transition-all"
			:class="[
				searchSection === 'busTours'
					? 'bg-white text-slate-900'
					: 'bg-blue-900/20 text-white hover:bg-blue-900/35',
			]"
			@click="showSearch('busTours')"
		>
			Туры к морю
		</button>
		<button
			type="button"
			class="rounded-xl px-4 py-2 transition-all"
			:class="[
				searchSection === 'excursions'
					? 'bg-white text-slate-900'
					: 'bg-blue-900/20 text-white hover:bg-blue-900/35',
			]"
			@click="showSearch('excursions')"
		>
			Экскурсии
		</button>
		<router-link
			to="#bus-rent"
			class="ml-5 rounded-xl bg-blue-200/20 px-4 py-2 text-white transition-all"
		>
			Аренда автобуса
		</router-link>
	</div>
</template>
