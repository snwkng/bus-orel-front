<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export interface Props {
	images: string[];
}

const props = withDefaults(defineProps<Props>(), {
	images: () => []
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
	thumbsSwiper.value = swiper;
};

const previewImages = ref<string[]>([]);

function fetchImage() {
	try {
		if (props.images.length) {
			props.images.forEach(async (image) => {
				const response = await $fetch(`/api/s3/download/${image}`);
				const blob = (await response) as Blob; // Преобразуем ответ в Blob

				const reader = new FileReader();
				reader.onloadend = () => {
					if (typeof reader.result === 'string') {
						previewImages.value.push(reader.result);
					}
				};
				reader.readAsDataURL(blob);
			});
		} else {
			throw new Error('no image');
		}
	} catch (error) {
		console.error(error);
		previewImages.value = [];
	}
}

fetchImage();
</script>
<template>
	<div>
		<ClientOnly>
			<swiper
				v-if="previewImages.length"
				:class="[
					'w-full',
					previewImages.length > 1 ? 'rounded-t-xl' : 'rounded-xl'
				]"
				:modules="[Thumbs, FreeMode, Navigation]"
				:loop="true"
				:space-between="10"
				:thumbs="{ swiper: thumbsSwiper }"
				navigation
			>
				<swiper-slide
					v-for="(slide, index) in previewImages"
					:key="index"
				>
					<img
						:class="[
							previewImages.length > 1 ? 'h-[400px]' : 'h-[500px]',
							'w-full object-cover object-center'
						]"
						alt="pic"
						:src="slide"
					/>
				</swiper-slide>
			</swiper>
			<swiper
				v-if="previewImages.length > 1"
				class="max-h-40 rounded-b-xl"
				:modules="[Thumbs, FreeMode]"
				:loop="true"
				:slides-per-view="3"
				:free-mode="true"
				:watch-slides-progress="true"
				:center-insufficient-slides="true"
				:auto-height="true"
				@swiper="setThumbsSwiper"
			>
				<swiper-slide
					v-for="(slide, index) in previewImages"
					:key="index"
				>
					<img
						class="min-h-[100px] w-full object-fill"
						alt="pic"
						:src="slide"
						loading="lazy"
					/>
				</swiper-slide>
			</swiper>
		</ClientOnly>
	</div>
</template>
