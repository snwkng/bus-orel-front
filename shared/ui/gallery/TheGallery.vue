<script setup lang="ts">
export interface Props {
	images: { name: string }[];
	path: string;
}

const props = withDefaults(defineProps<Props>(), {
	images: () => [],
	path: 'hotels'
});

const thumbsSwiper = ref(null);

const runtimeConfig = useRuntimeConfig()

const setThumbsSwiper = (swiper: any) => {
	thumbsSwiper.value = swiper;
};
</script>
<template>
	<div class="pt-5">
		<Swiper
			class="w-full rounded-t-xl"
			:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
			:loop="true"
			:space-between="10"
			:navigation="true"
			:thumbs="{ swiper: thumbsSwiper }"
		>
			<SwiperSlide v-for="(slide, index) in props.images" :key="index">
				<img
					class="max-h-[300px] w-full object-cover"
					alt="pic"
					:src="`${runtimeConfig.public.BASE_URL}/public/images/${path}/${slide.name}`"
				/>
			</SwiperSlide>
		</Swiper>
		<Swiper
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
			<SwiperSlide v-for="(slide, index) in props.images" :key="index">
				<img
					class="min-h-[100px] w-full object-fill"
					alt="pic"
					:src="`${runtimeConfig.public.BASE_URL}/public/images/${path}/${slide.name}`"
				/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>
