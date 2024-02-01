<script setup lang="ts"></script>
<template>
	<div class="px-base py-10">
		<h1 class="mb-2 text-4xl font-bold">
			Мидель-Гагра 2024
		</h1>
		<div class="">
			<Swiper
				:modules="[SwiperAutoplay, SwiperEffectCreative]"
				:slides-per-view="1"
				:loop="true"
				:effect="'creative'"
				:autoplay="{
					delay: 8000,
					disableOnInteraction: true,
				}"
				:creative-effect="{
					prev: {
						shadow: false,
						translate: ['-20%', 0, -1],
					},
					next: {
						translate: ['100%', 0, 0],
					},
				}"
			>
				<SwiperSlide v-for="slide in 10" :key="slide">
					<img
						alt="pic"
						src="https://images.unsplash.com/photo-1701743805444-d51a3636a03f?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</template>
