<script setup lang="ts">
interface IProps {
	title?: string;
	price?: number;
  priceDescription?: string;
	cities?: string[];
	duration?: number;
}

const props = defineProps<IProps>();

const endWordDayCheck = () => {
	if (props?.duration === 1) {
		return 'день';
		// eslint-disable-next-line no-else-return
	} else if (props?.duration && props.duration > 1 && props.duration < 5) {
		return 'дня';
	} else if (props?.duration && props.duration >= 5) {
		return 'дней';
	} else {
		return '';
	}
};
</script>

<template>
	<div class="flex flex-col justify-between sm:flex-row sm:items-center gap-y-2 sm:gap-y-0">
		<div class="felx flex-col gap-y-2">
			<h1
				class="mb-2 text-4xl font-bold dark:text-slate-200"
				v-if="title"
			>
				{{ title }}
			</h1>
			<div
				class="flex flex-row items-center gap-1 gap-x-3"
				v-if="duration || cities?.length"
			>
				<div
					class="flex flex-row items-center justify-center gap-1 text-gray-500 dark:text-slate-200"
					v-if="cities?.length"
				>
					<SharedUiIconsLocationIcon
						width="24px"
						height="24px"
					/>
					<span class="">{{ cities?.map((x: string) => x).join(', ') }}</span>
				</div>
				<div
					class="flex flex-row items-center justify-center gap-1"
					v-if="duration"
				>
					<SharedUiIconsTimeIcon
						width="24px"
						height="24px"
					/>
					<span class="text-gray-500 dark:text-slate-200">
						{{ duration }} {{ endWordDayCheck() }}
					</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-x-1 sm:items-end" v-if="price">
			<span class="font-semibold dark:text-slate-200"> от {{ price }}₽ </span>
			<span class="text-sm text-slate-400 sm:text-right">
				{{ priceDescription }}
			</span>
		</div>
	</div>
</template>
