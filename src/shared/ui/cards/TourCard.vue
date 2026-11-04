<script setup lang="ts">
interface IProps {
	id: string;
	type: 'excursion' | 'bus-tour';
	title: string;
	price: number;
	subtitle: string;
	date?: string | Date;
	images?: string[];
}

const props = withDefaults(defineProps<IProps>(), {
	date: undefined,
	images: () => []
});

const galleryRef = useTemplateRef('gallery');
const { x: galleryScrollX } = useScroll(galleryRef);

const activeImageIndex = computed(() => {
	const el = galleryRef.value;
	if (!el || el.clientWidth === 0) return 0;
	return Math.min(
		Math.round(galleryScrollX.value / el.clientWidth),
		props.images.length - 1
	);
});

const scrollGallery = (dir: 'prev' | 'next'): void => {
	const el = galleryRef.value;
	el?.scrollBy({
		left: dir === 'next' ? el.clientWidth : -el.clientWidth,
		behavior: 'smooth'
	});
};

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
				<div
					v-if="images.length"
					ref="gallery"
					class="card-gallery flex snap-x snap-mandatory overflow-x-auto"
				>
					<NuxtImg
						v-for="(img, i) in images"
						:key="`${img}-${i}`"
						:src="`/image/${img}`"
						:alt="`${title} — фото ${i + 1}`"
						class="aspect-[4/3] w-full shrink-0 snap-start object-cover"
						fit="inside"
						loading="lazy"
					/>
				</div>
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

				<template v-if="images.length > 1">
					<button
						v-if="activeImageIndex > 0"
						type="button"
						class="absolute top-1/2 left-2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-105 hover:bg-white md:group-hover:flex"
						aria-label="Предыдущее фото"
						@click.prevent.stop="scrollGallery('prev')"
					>
						<Icon
							name="lucide:chevron-left"
							class="size-4"
						/>
					</button>
					<button
						v-if="activeImageIndex < images.length - 1"
						type="button"
						class="absolute top-1/2 right-2 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-105 hover:bg-white md:group-hover:flex"
						aria-label="Следующее фото"
						@click.prevent.stop="scrollGallery('next')"
					>
						<Icon
							name="lucide:chevron-right"
							class="size-4"
						/>
					</button>
					<div
						class="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5"
						aria-hidden="true"
					>
						<span
							v-for="(_, i) in images"
							:key="i"
							class="size-1.5 rounded-full shadow-sm transition-colors duration-200"
							:class="i === activeImageIndex ? 'bg-white' : 'bg-white/50'"
						/>
					</div>
				</template>
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

<style scoped>
.card-gallery {
	scrollbar-width: none;
}

.card-gallery::-webkit-scrollbar {
	display: none;
}
</style>
