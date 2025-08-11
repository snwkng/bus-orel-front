<script setup>
const emit = defineEmits(['closeNav']);
const route = useRoute();
const close = () => {
	emit('closeNav', false);
};
watch(
	() => route.name,
	() => {
		close();
	}
);
</script>

<template>
	<nav
		v-click-away="close"
		class="absolute right-0 top-10 w-max rounded-xl bg-white p-6 shadow-lg dark:bg-gray-700 dark:text-slate-300 sm:w-80"
		itemscope
		itemtype="https://schema.org/SiteNavigationElement"
	>
		<ul
			class="list-none text-base"
			itemscope
			itemtype="https://schema.org/ItemList"
		>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					to="/bus-tours"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Автобусные туры к морю</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="1"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					to="/excursions"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Экскурсионные туры</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="2"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ name: 'home', hash: '#tour-selection' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Подбор тура</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="3"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ name: 'home', hash: '#bus-rent' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Аренда автобуса</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="4"
				>
			</li>
			<li
				itemprop="itemListElement"
				itemscope
				itemtype="https://schema.org/ListItem"
			>
				<NuxtLink
					:to="{ hash: '#contacts' }"
					class="list-item"
					itemprop="url"
				>
					<span itemprop="name">Контакты</span>
				</NuxtLink>
				<meta
					itemprop="position"
					content="5"
				>
			</li>
		</ul>
	</nav>
</template>
