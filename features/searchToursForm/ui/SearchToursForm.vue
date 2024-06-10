<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue'
import TheSelect from '~/shared/ui/forms/select/TheSelect.vue';
import TheButton from '~/shared/ui/buttons/TheButton.vue';

const router = useRouter();

const store = useTourStore();

const { getSeaList, getCityList } = store;
const { seaList, cityList } = storeToRefs(store);

const selectedSea = ref<SelectItem>({});
const selectedPlace = ref<SelectItem>({});

watch(
	() => selectedSea.value,
	() => {
		getCityList(selectedSea.value.name)
	}
)

const getTours = () => {
	router.push({ name: 'bus-tours', query: { seaType: selectedSea.value.name, city: selectedPlace.value.name } })
}

await callOnce(getSeaList);
await callOnce(getCityList);

</script>
<template>
	<form class="flex flex-col md:flex-row items-center md:justify-center gap-x-[2px] w-full">
		<the-input
			disabled="true"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			classes="rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl"
		/>
		<the-select
			select-id="море"
			label="Море"
			query-name="seaType"
			:list="seaList"
			@change="selectedSea = $event"
		/>
		<the-select
			select-id="куда"
			:list="cityList"
			label="Куда"
			query-name="city"
			classes="md:rounded-r-xl"
			@change="selectedPlace = $event"
		/>
		<the-button class="w-full md:w-52 md:ml-5 rounded-t-none md:rounded-t-xl" btn-title="Найти" @click="getTours" />
	</form>
</template>
