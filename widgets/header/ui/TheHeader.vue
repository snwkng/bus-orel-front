<script>
</script>
<script setup>
import TheNavbar from '@/features/navbar';

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
})

const toggle = ref(false)
const scroll = ref(false)

const handleScroll = () => {
	scroll.value = window.scrollY > 500
}
const close = (closeNav) => {
	toggle.value = closeNav
}
</script>

<template>
	<header :class="['z-10 flex items-center justify-between w-full bg-deep-blue px-base h-14 font-large fixed', { 'shadow-lg': scroll }]">
		<div class="text-white">
			<router-link :to="{ name: 'home' }">
				<strong class="text-deep-orange">G</strong>alatour
			</router-link>
		</div>
		<div v-if="scroll" class="text-white">
			text
		</div>
		<div class="relative">
			<button type="button" class="btn-hover" @click="toggle = !toggle">
				<i-menu filled :font-controlled="false" class="fill-white h-6 w-6" alt="menu" />
			</button>
			<Transition name="dropdown-fade">
				<the-navbar v-if="toggle" @close-nav="close" />
			</Transition>
		</div>
	</header>
</template>
<style lang="scss" scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
}
</style>
