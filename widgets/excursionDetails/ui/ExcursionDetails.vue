<script setup lang="ts">
import TheGallery from '@/shared/ui/gallery/TheGallery.vue';
import TheAccordion from '@/shared/ui/accordions/TheAccordion.vue';

const route = useRoute();
const excursionId = route.params.id as string;
const store = useExcursionStore();

await useAsyncData(() => store.getExcursion(excursionId).then(() => true))
</script>
<template>
	<div class="w-full">
		<div class="xl:w-[1280px] w-full m-auto px-base py-10 gap-5 flex flex-col">
			<div class="flex justify-between items-center">
				<h1 class="mb-2 text-4xl font-bold">
					{{ store.excursion.name }}
				</h1>
			</div>
			<the-gallery :images="store.excursion.images" path="excursions" />
			<div class="">
				<h3 class="text-xl font-semibold mb-2">
					Программа тура
				</h3>
				<the-accordion :items="store.excursion.description" />
			</div>
		</div>
	</div>
</template>
