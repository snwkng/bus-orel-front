<script setup lang="ts">

const fullYear: number = new Date().getFullYear();
</script>
<template>
	<div class="flex w-full items-end bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-slate-200">
		<footer
			class="body-font w-full"
			itemscope
			itemtype="https://schema.org/Organization"
		>
			<div
				class="max-w-container flex w-full flex-col py-24 lg:flex-row justify-center items-center md:justify-start md:items-start"
			>
				<div
					class="w-64 flex-shrink-0 text-center md:text-left"
					itemprop="description"
				>
					<router-link
						:to="{ name: 'home' }"
						itemprop="name"
					>
						<strong class="text-deep-orange">Г</strong>
						<span
							class="h-5 w-auto fill-current text-slate-900 dark:text-slate-100"
							>алатур</span
						>
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
								itemprop="sameAs"
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
								itemprop="sameAs"
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
					class="mb-10 mt-10 flex flex-grow flex-wrap text-center lg:mt-0 md:text-left gap-5"
				>
					<div class="w-full md:w-1/2 lg:w-1/4 lg:px-4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
							itemprop="department"
							itemscope
							itemtype="https://schema.org/Organization "
						>
							<span itemprop="name">Компания</span>
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Company"
							itemscope
							itemtype="https://schema.org/SiteNavigationElement"
						>
							<ul
								itemscope
								itemtype="https://schema.org/ItemList"
							>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'about' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">О нас</span>
									</router-link>
									<meta
										itemprop="position"
										content="1"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'tourist-reminder' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Памятка туристу</span>
									</router-link>
									<meta
										itemprop="position"
										content="2"
									>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full md:w-1/2 lg:w-1/4 lg:px-4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
							itemprop="department"
							itemscope
							itemtype="https://schema.org/Organization"
						>
							<span itemprop="name">Информация</span>
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Information"
							itemscope
							itemtype="https://schema.org/SiteNavigationElement"
						>
							<ul
								itemscope
								itemtype="https://schema.org/ItemList"
							>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'agreement' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Соглашения</span>
									</router-link>
									<meta
										itemprop="position"
										content="1"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'privacy-policy' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name"
											>Политика в отношении персональных данных</span
										>
									</router-link>
									<meta
										itemprop="position"
										content="2"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<a
										href="/sitemap.xml"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Карта сайта</span>
									</a>
									<meta
										itemprop="position"
										content="3"
									>
								</li>
							</ul>
						</nav>
					</div>
					<div class="w-full md:w-1/2 lg:w-1/4 lg:px-4">
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
							itemprop="department"
							itemscope
							itemtype="https://schema.org/Organization"
						>
							<span itemprop="name">Услуги</span>
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Service"
							itemscope
							itemtype="https://schema.org/SiteNavigationElement"
						>
							<ul
								itemscope
								itemtype="https://schema.org/ItemList"
							>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										to="/bus-tours"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Автобусные туры к морю из Орла</span>
									</router-link>
									<meta
										itemprop="position"
										content="1"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										to="/excursions"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Экскурсионные туры из Орла</span>
									</router-link>
									<meta
										itemprop="position"
										content="2"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'home', hash: '#bus-rent' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Аренда микроавтобусов</span>
									</router-link>
									<meta
										itemprop="position"
										content="3"
									>
								</li>
								<li
									class="mt-3"
									itemprop="itemListElement"
									itemscope
									itemtype="https://schema.org/ListItem"
								>
									<router-link
										:to="{ name: 'home', hash: '#tour-selection' }"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="url"
									>
										<span itemprop="name">Подбор туров</span>
									</router-link>
									<meta
										itemprop="position"
										content="4"
									>
								</li>
							</ul>
						</nav>
					</div>
					<div
						id="contacts"
						class="w-full md:w-1/2 lg:w-1/4 lg:px-4"
					>
						<h2
							class="title-font mb-3 text-sm font-medium uppercase tracking-widest text-slate-900 dark:text-slate-100"
						>
							Контакты
						</h2>
						<nav
							class="mb-10 list-none"
							aria-label="Contacts"
							itemscope
							itemtype="https://schema.org/ContactPoint"
						>
							<ul>
								<li class="mt-3">
									<a
										href="mailto:avtobus-orel.petlaj@yandex.ru"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="email"
									>
										avtobus-orel.petlaj@yandex.ru
									</a>
								</li>
								<li class="mt-3">
									<a
										href="tel:+74862780958"
										class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
										itemprop="telephone"
									>
										+7(4862)78-09-58
									</a>
								</li>
							</ul>
						</nav>

						<!-- Адрес (PostalAddress), связанный с Organization -->
						<div
							itemscope
							itemtype="https://schema.org/PostalAddress "
						>
							<a
								href="https://yandex.ru/maps/org/turisticheskoye_agentstvo_galatur/1067897790/?ll=36.060826%2C52.953087&z=14.36"
								class="cursor-pointer text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
								target="_blank"
								rel="noopener noreferrer"
								itemprop="streetAddress"
							>
								г. Орёл, ул. Комсомольская 88, оф. 6
							</a>
							<span>
								(Внимание! Офис работает только по предварительной записи)
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full bg-slate-300 dark:bg-gray-900">
				<div class="container mx-auto px-5 py-4">
					<p
						class="text-sm text-slate-700 dark:text-slate-300 xl:text-center"
					>
						© {{ fullYear }} Информация на сайте носит ознакомительный характер
						и не является публичной офертой
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>
