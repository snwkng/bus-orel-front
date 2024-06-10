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
			<li>
				<router-link to="/bus-tours" class="list-item">
					Автобусные туры к морю
				</router-link>
			</li>
			<li>
				<router-link to="/excursions" class="list-item">
					Экскурсионные туры
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'home', hash: '#tour-selection' }" class="list-item">
					Подбор тура
				</router-link>
			</li>
			<li>
				<router-link :to="{ hash: '#contacts' }" class="list-item">
					Контакты
				</router-link>
			</li>
		</ul>
	</nav>
</template>
