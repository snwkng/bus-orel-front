<script setup lang="ts">
const { BASE_URL } = useRuntimeConfig().public

const route = useRoute();

useHead({
	link: [{ rel: 'canonical', href: BASE_URL + (route.path === '/' ? '' : route.path) }],
})

useSeoMeta({
	title: 'Галатур Орел - О компании',
	ogTitle: 'Галатур Орел - О компании',
	description:
		'Галатур - Туристическое агентство в Орле, о нас',
	ogDescription:
		'Галатур - Туристическое агентство в Орле, о нас',
	keywords:
		'галатур, галатур орел, туристическое агентство'
})
</script>
<template>
	<div class="dark:bg-gray-800 dark:text-slate-200">
		<section
			class="m-auto flex min-h-[calc(100vh-(56px+514px+52px))] w-full flex-col gap-5 py-10 max-w-container"
		>
			<h1 class="text-2xl font-bold dark:text-slate-200 text-slate-900 sm:text-3xl">
				<strong class="text-deep-orange">Г</strong>алаТур Орёл - ваш проводник в
				мир увлекательных путешествий!
			</h1>
			<p class="leading-7">
				Мы предлагаем широкий выбор экскурсионных туров, отдыха на море,
				заграничных путешествий, а также возможность аренды автобусов
				туристического класса. Наше орловское туристическое агентство
				гарантирует высочайший уровень сервиса и надежность нашего предложения.
			</p>
			<p class="leading-7">
				Забронировать тур стало легко и удобно благодаря нашей команде
				профессионалов, которые создают для вас максимально комфортные и
				прозрачные условия. Откройте для себя новые уголки мира с
				<strong class="text-deep-orange">Г</strong>алаТур и наслаждайтесь
				незабываемым отдыхом!
			</p>
		</section>
	</div>
</template>
