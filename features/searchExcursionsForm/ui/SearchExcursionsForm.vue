<script setup lang="ts">
import TheInput from '@/shared/ui/forms/TheInput.vue'
import TheSelect from '~/shared/ui/forms/TheSelect.vue';
import { EBorderRadius } from '~/shared/lib/types';
import TheButton from '~/shared/ui/buttons/TheButton.vue';

const place: SelectItem[] = [
	{ id: 1, name: 'Москва' },
	{ id: 2, name: 'Дагестан' },
	{ id: 2, name: 'Анапа' },
	{ id: 2, name: 'Сочи' },
	{ id: 2, name: 'Адлер' },
	{ id: 2, name: 'Лоо' }
]
</script>
<template>
	<form class="w-full flex flex-row items-center justify-center gap-x-[2px] flex-wrap">
		<the-input
			disabled="true"
			class="w-64 input:rounded-l-none"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			:radius="EBorderRadius.left"
		/>
		<the-select class="w-64" select-id="куда" label="Куда" :list="place" :radius="EBorderRadius.right" />
		<the-button class="w-52 ml-5" btn-title="Найти" />
	</form>
</template>
