<script setup>
const emit = defineEmits(['closeNav']);
const route = useRoute();
const close = () => {
	emit('closeNav', false);
}
watch(
	() => route.name,
	() => {
		close();
	}
)
</script>

<template>
	<nav v-click-away="close" class="bg-white p-6 absolute top-10 right-0 rounded-xl w-80 shadow-lg">
		<ul class="list-none text-base">
			<li class="list-item">
				<router-link to="/bus-tours">
					Автобусные туры к морю
				</router-link>
			</li>
			<li class="list-item">
				<router-link to="/excursions">
					Экскурсионные туры
				</router-link>
			</li>
			<li class="list-item">
				<router-link to="#">
					Подбор тура
				</router-link>
			</li>
		</ul>
	</nav>
</template>
