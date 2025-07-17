<script setup lang="ts">

const router = useRouter();

const store = useTourStore();

const { getSeaList, getCityList } = store;
const { seaList, cityList } = storeToRefs(store);

const selectedSea = ref<SelectItem>({});
const selectedPlace = ref<SelectItem>({});

watch(
	() => selectedSea.value?.name,
	async () => {
		await getCityList(selectedSea.value.name);
	},
	{ immediate: true }
);

const updateValue = (value: SelectItem, type: string) => {
	if (type === 'seaType') {
		selectedSea.value = value
	} else if (type === 'city') {
		selectedPlace.value = value
	}
}

const getTours = () => {
	router.push({
		name: 'bus-tours',
		query: { seaType: selectedSea.value.name, city: selectedPlace.value.name }
	});
};

await callOnce(getSeaList);
await callOnce(getCityList);
</script>
<template>
	<form
		class="flex w-full flex-col items-center gap-x-[2px] md:flex-row md:justify-center"
	>
		<SharedUiFormsTheInput
			disabled
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			classes="rounded-t-xl md:rounded-t-none md:rounded-l-xl md:rounded-tl-xl"
		/>
		<SharedUiFormsSelectTheSelect
			select-id="море"
			label="Море"
			query-name="seaType"
			:list="seaList"
			@change="updateValue($event, 'seaType')"
		/>
		<SharedUiFormsSelectTheSelect
			select-id="куда"
			:list="cityList"
			label="Куда"
			query-name="city"
			classes="md:rounded-r-xl"
			@change="updateValue($event, 'city')"
		/>
		<SharedUiButtonsTheButton
			class="w-full rounded-t-none md:ml-5 md:w-52 md:rounded-t-xl"
			btn-title="Найти"
			@click="getTours"
		/>
	</form>
</template>
