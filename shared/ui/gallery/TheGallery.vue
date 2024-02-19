<script setup lang="ts">
export interface Props {
	images: {name: string}[],
}

const props = withDefaults(defineProps<Props>(), {
	images: () => []
});

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
	thumbsSwiper.value = swiper;
};
</script>
<template>
	<div class="pt-5">
		<Swiper
			class="rounded w-full"
			:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
			:loop="true"
			:space-between="10"
			:navigation="true"
			:thumbs="{ swiper: thumbsSwiper }"
		>
			<SwiperSlide v-for="(slide, index) in props.images" :key="index">
				<img
					class="w-full max-h-[500px] object-contain"
					alt="pic"
					:src="`http://localhost:3001/images/hotels/${slide.name}`"
				/>
			</SwiperSlide>
		</Swiper>
		<Swiper
			class="rounded max-h-56"
			:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
			:loop="true"
			:slides-per-view="4"
			:free-mode="true"
			:watch-slides-progress="true"
			:center-insufficient-slides="true"
			:auto-height="true"
			@swiper="setThumbsSwiper"
		>
			<SwiperSlide v-for="(slide, index) in props.images" :key="index">
				<img
					class="w-full min-h-[200px] object-fill"
					alt="pic"
					:src="`http://localhost:3001/images/hotels/${slide.name}`"
				/>
			</SwiperSlide>
		</Swiper>
	</div>
</template>
