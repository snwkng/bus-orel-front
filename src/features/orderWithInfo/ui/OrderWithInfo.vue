<script setup lang="ts">
interface IProps {
	price?: number;
	infoValues?: {
		iconName: string;
		iconColor?: string;
		title?: string;
		text?: string;
		textOnTitle?: boolean;
	}[];
}

withDefaults(defineProps<IProps>(), {
  price: undefined,
  infoValues: () => []
})

const emit = defineEmits<(event: 'clickOrder') => void>();
</script>

<template>
	<div
		class="flex h-fit w-full flex-col gap-3 rounded-xl p-4 shadow-xl dark:bg-gray-700"
	>
		<SharedLayoutsIconWithInfo
      v-for="(value, idx) in infoValues"
      :key="idx"
			:icon-name="value.iconName"
			:title="value.title"
			:text="value.text"
      :icon-color="value.iconColor"
      :text-on-title="value.textOnTitle"
		/>

		<div
			v-if="price"
			class="flex flex-col items-center justify-center"
		>
			<div class="rounded-xl bg-primary-50 px-4 py-2">
				<SharedFontsText
					variant="body-2xl"
					color="dark-only"
				>
					от {{ price }}₽
				</SharedFontsText>
			</div>
			<SharedFontsText
				variant="caption-lg"
				color="muted"
			>
				Минимально возможная цена за человека
			</SharedFontsText>
		</div>

		<button
			type="button"
			class="min-h-14 w-full rounded-xl bg-primary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-primary-500/95"
			@click="emit('clickOrder')"
		>
			Забронировать
		</button>
	</div>
</template>
