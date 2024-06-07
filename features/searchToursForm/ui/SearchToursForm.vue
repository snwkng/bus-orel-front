<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue'
import TheSelect from '~/shared/ui/forms/select/TheSelect.vue';
import { EBorderRadius } from '~/shared/lib/types';
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
	<form class="flex flex-row items-center justify-center gap-x-[2px] flex-wrap">
		<the-input
			disabled="true"
			class="w-52 input:rounded-l-none"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			:radius="EBorderRadius.left"
		/>
		<the-select
			select-id="море"
			label="Море"
			:list="seaList"
			@change="selectedSea = $event"
		/>
		<the-select
			select-id="куда"
			:list="cityList"
			label="Куда"
			:radius="EBorderRadius.right"
			@change="selectedPlace = $event"
		/>
		<the-button class="w-52 ml-5" btn-title="Найти" @click="getTours" />
	</form>
</template>
