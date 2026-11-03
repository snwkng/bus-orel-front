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

const props = withDefaults(defineProps<IProps>(), {
	price: undefined,
	infoValues: () => []
});

const emit = defineEmits<{
	(event: 'clickOrder' | 'clickQuestion'): void;
}>();

const formattedPrice = computed(() =>
	props.price ? new Intl.NumberFormat('ru-RU').format(props.price) : ''
);
</script>

<template>
	<div
		class="flex w-full flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
	>
		<div v-if="price">
			<p class="typo-small mb-1 text-neutral-500">от</p>
			<p class="text-3xl font-bold tracking-tight">
				{{ formattedPrice }} ₽
				<span class="typo-body font-medium text-neutral-500">/ человек</span>
			</p>
		</div>

		<div
			v-if="infoValues.length"
			class="flex flex-col gap-3 border-t border-neutral-100 pt-4"
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
		</div>

		<div class="flex flex-col gap-2.5">
			<button
				type="button"
				class="bg-primary-500 hover:bg-primary-600 typo-button w-full rounded-full py-3 text-white transition-all active:scale-95"
				@click="emit('clickOrder')"
			>
				Забронировать
			</button>
			<button
				type="button"
				class="bg-secondary-600 hover:bg-secondary-700 typo-button w-full rounded-full py-3 text-white transition-all active:scale-95"
				@click="emit('clickQuestion')"
			>
				Задать вопрос
			</button>
		</div>

		<p class="typo-caption flex items-start gap-2 text-neutral-400">
			<Icon
				name="lucide:shield-check"
				class="text-secondary-500 mt-0.5 size-3.5 shrink-0"
			/>
			Бронь бесплатна и ни к чему не обязывает: менеджер перезвонит, ответит на
			вопросы и зафиксирует цену.
		</p>
	</div>
</template>
