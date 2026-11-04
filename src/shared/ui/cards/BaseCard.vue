<script setup lang="ts">
interface IProps {
	id: string;
	type: 'excursion' | 'bus-tour';
	title: string;
	price: number;
	subtitle: string;
	date?: string | Date;
	imageLink?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	date: undefined,
	imageLink: ''
});

const dayjs = useDayjs();

const link = computed(() =>
	props.type === 'excursion'
		? { name: 'excursions-id', params: { id: props.id } }
		: { name: 'bus-tours-id', params: { id: props.id } }
);

const formattedDate = computed(() =>
	props.date ? dayjs(props.date).format('DD.MM.YYYY') : undefined
);

const formattedPrice = computed(() =>
	new Intl.NumberFormat('ru-RU').format(props.price)
);

const placeholderIcon = computed(() =>
	props.type === 'excursion' ? 'lucide:landmark' : 'lucide:palmtree'
);
</script>

<template>
	<article class="group cursor-pointer">
		<NuxtLink
			:to="link"
			class="block"
		>
			<div
				class="relative mb-3 overflow-hidden rounded-xl bg-neutral-100 transition-shadow duration-300 group-hover:shadow-md"
			>
				<NuxtImg
					v-if="imageLink"
					:src="`/image/${imageLink}`"
					:alt="title"
					class="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
					fit="inside"
					loading="lazy"
				/>
				<div
					v-else
					class="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2"
				>
					<Icon
						:name="placeholderIcon"
						class="text-secondary-300 size-8 transition-transform duration-300 ease-out group-hover:scale-110"
					/>
					<span class="text-sm font-semibold text-neutral-300">ГалаТур</span>
				</div>
				<span
					v-if="formattedDate"
					class="typo-caption absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-1 font-semibold text-neutral-800 shadow-sm"
				>
					{{ formattedDate }}
				</span>
			</div>
			<h3
				class="typo-small truncate leading-snug font-semibold group-hover:underline"
			>
				{{ title }}
			</h3>
			<p class="typo-small mt-0.5 truncate text-neutral-500">
				{{ subtitle }}
			</p>
			<p class="typo-small mt-1.5">
				<span class="font-bold">от {{ formattedPrice }} ₽</span>
				<span class="text-neutral-500"> за человека</span>
			</p>
		</NuxtLink>
	</article>
</template>
