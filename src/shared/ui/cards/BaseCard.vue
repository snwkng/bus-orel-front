<script setup lang="ts">
interface IProps {
	id: string;
	type: 'excursion' | 'bus-tour';
	title: string;
	price: number;
	subtitle: string;
	date?: string | Date;
	imageLink: string;
}

const props = withDefaults(defineProps<IProps>(), {
	date: undefined
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
</script>
<template>
	<article>
		<NuxtLink
			:to="link"
			class="flex flex-col"
		>
			<div class="relative mb-1">
				<NuxtImg
					class="h-[250px] w-full rounded-3xl object-cover brightness-100 bg-neutral-300"
					:src="`/image/${imageLink}`"
					:alt="title"
					:title="title"
					height="250"
					loading="lazy"
					fit="inside"
				/>
				<div
					v-if="formattedDate"
					class="absolute left-3 top-3 flex items-center justify-center rounded-3xl bg-secondary-200 px-2 py-1 shadow-md dark:bg-secondary-50"
				>
					<SharedFontsText
						variant="body-sm"
						weight="semibold"
						color="white"
					>
						{{ formattedDate }}
					</SharedFontsText>
				</div>
			</div>

			<slot name="title">
				<SharedFontsHeading
					variant="heading-md"
					weight="semibold"
				>
					{{ title }}
				</SharedFontsHeading>
			</slot>
			<slot name="subtitle">
				<SharedFontsText
					variant="body-sm"
					color="muted"
					>{{ subtitle }}</SharedFontsText
				>
			</slot>
			<slot name="price">
				<div class="flex gap-1">
					<SharedFontsText
						variant="body-sm"
						color="muted"
						>от</SharedFontsText
					>
					<SharedFontsText
						variant="body-sm"
						weight="semibold"
					>
						{{ price }}&#8381;
					</SharedFontsText>
					<SharedFontsText
						variant="body-sm"
						color="muted"
						>за поездку</SharedFontsText
					>
				</div>
			</slot>
		</NuxtLink>
	</article>
</template>
