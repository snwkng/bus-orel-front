<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperClass } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export interface IProps {
	images?: string[];
}

withDefaults(defineProps<IProps>(), { images: () => [] });

// const previewImages = ref<string[]>([]);

const swiperInstance = ref<SwiperClass | null>(null);

const onSwiper = (swiper: SwiperClass) => {
	swiperInstance.value = swiper;
};

const swiperNextSlide = () => {
	(swiperInstance.value as SwiperClass)?.slideNext();
};

const swiperPrevSlide = () => {
	(swiperInstance.value as SwiperClass)?.slidePrev();
};

</script>
<template>
	<div class="h-[300px] md:h-[550px]">
		<div />
		<ClientOnly fallback-tag="div">
			<template #fallback>
				<SharedUiSkeletonSwiper />
			</template>
			<swiper
				class="relative w-full cursor-grab rounded-xl"
				:scrollbar="{ draggable: true }"
				:space-between="10"
				:navigation="{ prevEl: 'swiper-prev', nextEl: 'swiper-next' }"
				@swiper="onSwiper"
			>
				<swiper-slide
					v-for="(slide, index) in images"
					:key="index"
				>
					<NuxtImg
						class="h-[300px] w-full object-cover object-center md:h-[550px]"
						:src="`/image/${slide}`"
						:alt="`slide-${index}`"
						height="550"
						loading="lazy"
						fit="inside"
					/>
				</swiper-slide>
				<div
					v-if="!swiperInstance?.isBeginning"
					class="swiper-btn swiper-prev left-2"
					@click="swiperPrevSlide"
				>
					<SharedUiIconsArrowButton
						width="32px"
						height="32px"
						color="stroke-deep-blue dark:stroke-white"
						class="rotate-90"
					/>
				</div>
				<div
					v-if="!swiperInstance?.isEnd"
					class="swiper-btn swiper-next right-2"
					@click="swiperNextSlide"
				>
					<SharedUiIconsArrowButton
						width="32px"
						height="32px"
						color="stroke-deep-blue dark:stroke-white"
						class="rotate-270"
					/>
				</div>
			</swiper>
		</ClientOnly>
	</div>
</template>
