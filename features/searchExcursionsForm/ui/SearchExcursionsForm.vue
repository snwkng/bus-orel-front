<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue';
import TheSelect from '@/shared/ui/forms/select/TheSelect.vue';
import { EBorderRadius } from '@/shared/lib/types';
import TheButton from '@/shared/ui/buttons/TheButton.vue';

const place: SelectItem[] = [
	{ id: 1, name: 'Москва' },
	{ id: 2, name: 'Дагестан' },
	{ id: 3, name: 'Анапа' },
	{ id: 4, name: 'Сочи' },
	{ id: 5, name: 'Адлер' },
	{ id: 6, name: 'Лоо' }
];
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
			:list="place"
			:radius="EBorderRadius.right"
		/>
		<the-button class="ml-5 w-52" btn-title="Найти" />
	</form>
</template>
