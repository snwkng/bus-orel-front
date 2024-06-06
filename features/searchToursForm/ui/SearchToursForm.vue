<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue'
import TheSelect from '~/shared/ui/forms/select/TheSelect.vue';
import { EBorderRadius } from '~/shared/lib/types';
import TheButton from '~/shared/ui/buttons/TheButton.vue';

const seaType: SelectItem[] = [
	{ id: 1, name: 'Черное море' },
	{ id: 2, name: 'Азовское море' }
]

const place: SelectItem[] = [
	{ id: 1, name: 'Геленджик' },
	{ id: 2, name: 'Джугба' },
	{ id: 2, name: 'Анапа' },
	{ id: 2, name: 'Сочи' },
	{ id: 2, name: 'Адлер' },
	{ id: 2, name: 'Лоо' }
]

const selectedSea = ref<SelectItem>({});
const selectedPlace = ref<SelectItem>({});
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
			:list="seaType"
			@change="selectedSea = $event"
		/>
		<the-select
			select-id="куда"
			:list="place"
			label="Куда"
			:radius="EBorderRadius.right"
			@change="selectedPlace = $event"
		/>
		<the-button class="w-52 ml-5" btn-title="Найти" />
	</form>
</template>
