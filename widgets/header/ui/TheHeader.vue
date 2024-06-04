<script setup lang="ts">
import TheNavbar from '@/features/navbar';

export interface Props {
	isSingle?: boolean,
}

withDefaults(defineProps<Props>(), {
	isSingle: false
})

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll);
})

const toggle = ref(false)
const scroll = ref(false)

const handleScroll = () => {
	scroll.value = window.scrollY > 400
}
const close = (closeNav: boolean) => {
	toggle.value = closeNav
}
</script>

<template>
	<header :class="['w-full z-20 bg-deep-blue font-large fixed h-14', { 'shadow-lg': scroll }]">
		<div :class="['bg-transparent flex items-center justify-between h-14 px-base w-full mx-auto', { 'xl:w-[1280px]': isSingle }]">
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
