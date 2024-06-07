<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue';
import TheSelect from '@/shared/ui/forms/select/TheSelect.vue';
import { EBorderRadius } from '@/shared/lib/types';
import TheButton from '@/shared/ui/buttons/TheButton.vue';

const router = useRouter();

const store = useExcursionStore();

const { getCityList } = store;
const { cityList } = storeToRefs(store);

const selectedCity = ref<SelectItem>({});

const getExcursions = () => {
	router.push({ name: 'excursions', query: { city: selectedCity.value.name } })
}

await callOnce(getCityList);
</script>
<template>
	<form
		class="flex w-full flex-row flex-wrap items-center justify-center gap-x-[2px]"
	>
		<the-input
			disabled="true"
			class="input:rounded-l-none w-64"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			:radius="EBorderRadius.left"
		/>
		<the-select
			class="w-64"
			select-id="куда"
			label="Куда"
			:list="cityList"
			:radius="EBorderRadius.right"
			@change="selectedCity = $event"
		/>
		<the-button class="ml-5 w-52" btn-title="Найти" @click="getExcursions" />
	</form>
</template>
