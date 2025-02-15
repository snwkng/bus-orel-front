<script setup lang="ts">
const { BASE_URL } = useRuntimeConfig().public;

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

function fetchImage () {
	try {
		if (props.images.length) {
			props.images.forEach(async (image) => {
				const response = await $fetch(
					`${BASE_URL}/api/s3/download/${image}`
				);
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
		previewImages.value = [];
	}
}

fetchImage();
</script>
<template>
	<div class="pt-5">
		<Swiper
			v-if="previewImages.length"
			:class="['w-full', previewImages.length > 1 ? 'rounded-t-xl' : 'rounded-xl']"
			:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
			:loop="true"
			:space-between="10"
			:navigation="true"
			:thumbs="{ swiper: thumbsSwiper }"
		>
			<SwiperSlide
				v-for="(slide, index) in previewImages"
				:key="index"
			>
				<img
					:class="[previewImages.length > 1 ? 'max-h-[400px] object-contain' : 'max-h-[500px] object-cover', 'w-full']"
					alt="pic"
					:src="slide"
				/>
			</SwiperSlide>
		</Swiper>
		<Swiper
			v-if="previewImages.length > 1"
			class="max-h-40 rounded-b-xl"
			:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
			:loop="true"
			:slides-per-view="3"
			:free-mode="true"
			:watch-slides-progress="true"
			:center-insufficient-slides="true"
			:auto-height="true"
			@swiper="setThumbsSwiper"
		>
			<SwiperSlide
				v-for="(slide, index) in previewImages"
				:key="index"
			>
				<img
					class="min-h-[100px] w-full object-fill"
					alt="pic"
					:src="slide"
				/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>
