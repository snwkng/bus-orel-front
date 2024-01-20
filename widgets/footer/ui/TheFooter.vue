<script setup lang="ts">
const fullYear: number = new Date().getFullYear();
</script>
<template>
	<div class="flex w-full items-end bg-white">
		<footer class="body-font w-full bg-gray-100 text-gray-700">
			<div
				class="md:flex-no-wrap mx-auto flex flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start"
			>
				<div
					class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left"
				>
					<router-link :to="{ name: 'home' }">
						<strong class="text-deep-orange">G</strong><span class="h-5 w-auto fill-current text-gray-900">alatour</span>
					</router-link>
					<p class="mt-2 text-sm text-gray-500">
						Туристическое агентство в Орле!
					</p>
					<div class="mt-4">
						<div
							class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
						>
							<a
								href="https://vk.com/gtorel"
								rel="noopener noreferrer"
								class="cursor-pointer text-gray-500 hover:text-gray-700"
								target="_blank"
								aria-label="vk"
							>
								<i-vk filled :font-controlled="false" class="h-6 w-6" alt="vk" title="vk" />
							</a>
							<a
								href="https://ok.ru/gtorel"
								rel="noopener noreferrer"
								class="ml-3 cursor-pointer text-gray-500 hover:text-gray-700"
								target="_blank"
								aria-label="одноклассники"
							>
								<i-okru filled :font-controlled="false" class="h-6 w-6" alt="одноклассники" title="одноклассники" />
							</a>
						</div>
					</div>
				</div>
				<div
					class="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"
				>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Компания
						</h2>
						<nav class="mb-10 list-none" aria-label="Company">
							<ul>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>О нас</a>
								</li>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>Памятка туристу</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Информация
						</h2>
						<nav class="mb-10 list-none" aria-label="Information">
							<ul>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>Соглашения</a>
								</li>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>Конфеденциальность</a>
								</li>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>Карта сайта</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Услуги
						</h2>
						<nav class="mb-10 list-none" aria-label="Service">
							<ul>
								<li class="mt-3">
									<router-link
										to="/bus-tours"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
									>
										Автобусные туры к морю из Орла
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										to="/excursions"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
									>
										Экскурсионные туры из Орла
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										:to="{ name: 'home', hash: '#bus-rent' }"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
									>
										Аренда микроавтобусов
									</router-link>
								</li>
								<li class="mt-3">
									<a
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
									>Подбор туров</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-900"
						>
							Контакты
						</h2>
						<nav class="mb-10 list-none" aria-label="Contacts">
							<ul>
								<li class="mt-3">
									<a
										href="mailto:avtobus-orel.petlaj@yandex.ru"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
									>
										avtobus-orel.petlaj@yandex.ru
									</a>
								</li>
								<li class="mt-3">
									<a
										href="tel:+74862780958"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
									>
										+7(4862)78-09-58
									</a>
								</li>
								<li class="mt-3 flex flex-wrap">
									<a
										href="https://yandex.ru/maps/org/turisticheskoye_agentstvo_galatur/1067897790/?ll=36.060826%2C52.953087&z=14.36"
										class="cursor-pointer text-gray-500 hover:text-gray-900 transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										г. Орёл, ул. Комсомольская 88, оф. 6
									</a>
								</li>
								<li>
									<span>(Внимание! Офис работает только по предварительной
										записи)</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div class="bg-gray-300">
				<div class="container mx-auto px-5 py-4">
					<p class="text-sm text-gray-700 xl:text-center">
						© {{ fullYear }} Информация на сайте носит ознакомительный характер
						и не является публичной офертой
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>
