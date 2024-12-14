<script setup lang="ts">
export interface Props {
	city?: string;
	duration?: number;
	excursionStart?: Date;
	price?: number;
	hotelName?: string;
	documentName?: string;
}

defineProps<Props>();
</script>
<template>
	<div
		class="flex w-full flex-col flex-wrap justify-between gap-x-8 gap-y-4 rounded-xl bg-slate-100 px-5 py-6 text-slate-600 sm:flex-row sm:items-center"
	>
		<div v-if="city" class="flex items-center gap-x-1">
			<div>
				<SharedUiIconsLocationIcon
					width="32px"
					height="32px"
				/>
			</div>
			{{ city }}
		</div>
		<div v-if="duration" class="flex items-center gap-x-1">
			<div>
				<SharedUiIconsTimeIcon
					width="32px"
					height="32px"
				/>
			</div>
			{{ duration }}
		</div>
		<div v-if="excursionStart" class="flex items-center gap-x-1">
			<div>
				<SharedUiIconsDateIcon
					width="32px"
					height="32px"
				/>
			</div>
			{{ $dayjs(excursionStart).format('DD.MM.YYYY') }}
		</div>
		<div
			v-if="price"
			class="flex items-center gap-x-1"
			title="Стоимость"
		>
			<div>
				<SharedUiIconsMoneyIcon
					width="32px"
					height="32px"
				/>
			</div>
			от {{ price }} ₽
		</div>
		<div v-if="hotelName" class="flex items-center gap-x-1">
			<div>
				<SharedUiIconsCityIcon
					width="32px"
					height="32px"
				/>
			</div>
			{{ hotelName }}
		</div>
		<div
			v-if="documentName"
			class="flex items-center gap-x-1"
			title="Скачать прайс"
		>
			<div>
				<SharedUiIconsFileIcon
					width="32px"
					height="32px"
				/>
			</div>
			{{ documentName }}
		</div>
	</div>
</template>
