<script setup lang="ts">
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
	thumbsSwiper.value = swiper;
};
</script>
<template>
	<div class="px-base py-10">
		<div class="">
			<h1 class="mb-2 text-4xl font-bold">
				Отель Мидель-Гагра 2024
			</h1>
		</div>
		<div class="pt-5">
			<Swiper
				class="rounded w-full"
				:modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
				:loop="true"
				:space-between="10"
				:navigation="true"
				:thumbs="{ swiper: thumbsSwiper }"
			>
				<SwiperSlide v-for="slide in 10" :key="slide">
					<img
						class="w-full max-h-[500px] object-contain"
						alt="pic"
						src="https://images.unsplash.com/photo-1701743805444-d51a3636a03f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
				@swiper="setThumbsSwiper"
			>
				<SwiperSlide v-for="slide in 10" :key="slide">
					<img
						class="w-full object-contain"
						alt="pic"
						src="https://images.unsplash.com/photo-1701743805444-d51a3636a03f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="">
			<h3>Расположение</h3>
		</div>
		<div class="">
			<h3>Размещение</h3>
		</div>
		<div class="">
			<h3>Питание</h3>
		</div>
	</div>
</template>
