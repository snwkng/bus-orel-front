<script setup lang="ts">
export interface Props {
	isSingle?: boolean;
}

withDefaults(defineProps<Props>(), {
	isSingle: false
});

const fullYear: number = new Date().getFullYear();
</script>
<template>
	<div class="flex w-full items-end">
		<footer
			class="body-font w-full bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-200"
		>
			<div
				:class="[
					'md:flex-no-wrap px-base mx-auto flex w-full flex-col flex-wrap px-5 py-24 md:flex-row md:items-center lg:items-start',
					{ 'px-base xl:w-[1280px]': isSingle },
				]"
			>
				<div
					class="mx-auto w-64 flex-shrink-0 text-center md:mx-0 md:text-left"
				>
					<router-link :to="{ name: 'home' }">
						<strong class="text-deep-orange">Г</strong>
						<span
							class="h-5 w-auto fill-current text-slate-900 dark:text-slate-100"
						>алатур</span>
					</router-link>
					<p
						class="mt-2 text-sm text-slate-500 dark:text-slate-300 dark:hover:text-slate-100"
					>
						Туристическое агентство в Орле!
					</p>
					<div class="mt-4">
						<div
							class="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start"
						>
							<a
								href="https://vk.com/gtorel"
								rel="noopener noreferrer"
								class="cursor-pointer"
								target="_blank"
								aria-label="vk"
							>
								<i-vk
									filled
									:font-controlled="false"
									class="h-6 w-6"
									alt="vk"
									title="vk"
								/>
							</a>
							<a
								href="https://ok.ru/gtorel"
								rel="noopener noreferrer"
								class="ml-3 cursor-pointer"
								target="_blank"
								aria-label="одноклассники"
							>
								<i-okru
									filled
									:font-controlled="false"
									class="h-6 w-6"
									alt="одноклассники"
									title="одноклассники"
								/>
							</a>
						</div>
					</div>
				</div>
				<div
					class="-mb-10 mt-10 flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"
				>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
						>
							Компания
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Company"
						>
							<ul>
								<li class="mt-3">
									<router-link
										:to="{ name: 'about' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										О нас
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										:to="{ name: 'tourist-reminder' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Памятка туристу
									</router-link>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
						>
							Информация
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Information"
						>
							<ul>
								<li class="mt-3">
									<router-link
										:to="{ name: 'agreement' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Соглашения
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										:to="{ name: 'privacy-policy' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Политика в отношении персональных данных
									</router-link>
								</li>
								<li class="mt-3">
									<a
										href="/sitemap.xml"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Карта сайта
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full px-4 md:w-1/2 lg:w-1/4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
						>
							Услуги
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Service"
						>
							<ul>
								<li class="mt-3">
									<router-link
										to="/bus-tours"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Автобусные туры к морю из Орла
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										to="/excursions"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Экскурсионные туры из Орла
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										:to="{ name: 'home', hash: '#bus-rent' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Аренда микроавтобусов
									</router-link>
								</li>
								<li class="mt-3">
									<router-link
										:to="{ name: 'home', hash: '#tour-selection' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										Подбор туров
									</router-link>
								</li>
							</ul>
						</nav>
					</div>
					<div
						id="contacts"
						class="w-full px-4 md:w-1/2 lg:w-1/4"
					>
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
						>
							Контакты
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Contacts"
						>
							<ul>
								<li class="mt-3">
									<a
										href="mailto:avtobus-orel.petlaj@yandex.ru"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										avtobus-orel.petlaj@yandex.ru
									</a>
								</li>
								<li class="mt-3">
									<a
										href="tel:+74862780958"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
									>
										+7(4862)78-09-58
									</a>
								</li>
								<li class="mt-3 md:flex md:flex-wrap">
									<a
										href="https://yandex.ru/maps/org/turisticheskoye_agentstvo_galatur/1067897790/?ll=36.060826%2C52.953087&z=14.36"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
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
			<div class="bg-slate-300 dark:bg-gray-900">
				<div class="container mx-auto px-5 py-4">
					<p
						class="text-sm text-slate-700 dark:text-slate-300 dark:hover:text-slate-100 xl:text-center"
					>
						© {{ fullYear }} Информация на сайте носит ознакомительный характер
						и не является публичной офертой
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>
