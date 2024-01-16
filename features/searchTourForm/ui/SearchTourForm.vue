<script setup lang="ts">
import TheInput from '@/shared/ui/form/TheInput.vue'
import TheSelect from '~/shared/ui/form/TheSelect.vue';
import { EBorderRadius } from '~/shared/lib/types';

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
</script>
<template>
	<form class="flex flex-row items-center justify-start gap-x-[2px] flex-wrap">
		<the-input
			disabled="true"
			class="w-52"
			input-id="откуда"
			type="text"
			label="Откуда"
			placeholder="Орёл"
			:radius="EBorderRadius.left"
		/>
		<the-select class="w-52" select-id="море" label="Море" :list="seaType" />
		<the-select class="w-52" select-id="куда" label="Куда" :list="place" :radius="EBorderRadius.right" />
	</form>
</template>
