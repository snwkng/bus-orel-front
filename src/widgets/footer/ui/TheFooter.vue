<script setup lang="ts">
const fullYear: number = new Date().getFullYear();
</script>

<template>
	<footer
		class="border-t border-neutral-100 bg-neutral-50"
		itemscope
		itemtype="https://schema.org/Organization"
	>
		<div
			class="mx-auto grid w-full max-w-[1200px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4"
		>
			<div>
				<div class="mb-4 flex items-center gap-2">
					<span
						class="bg-primary-500 flex size-8 items-center justify-center rounded-lg text-lg font-bold text-white"
						>Г</span
					>
					<span
						class="text-lg font-semibold tracking-tight"
						itemprop="name"
						>ГалаТур</span
					>
				</div>
				<p
					class="typo-small max-w-[28ch] text-neutral-500"
					itemprop="description"
				>
					Турагентство из Орла. Возим к морю на своих автобусах, возим на
					экскурсии, сдаём микроавтобусы в аренду.
				</p>
				<div class="mt-4 flex items-center gap-3">
					<a
						href="https://vk.com/gtorel"
						rel="noopener noreferrer"
						target="_blank"
						aria-label="Мы во ВКонтакте"
						itemprop="sameAs"
						class="flex items-center justify-center rounded-full bg-neutral-500 p-2 transition-all hover:bg-[#0077FF]"
					>
						<SvgoVk
							:font-controlled="false"
							class="size-6 text-white"
						/>
					</a>
					<a
						href="https://ok.ru/gtorel"
						rel="noopener noreferrer"
						target="_blank"
						aria-label="Мы в Одноклассниках"
						itemprop="sameAs"
						class="flex items-center justify-center rounded-full bg-neutral-500 p-2 transition-all hover:bg-[#F97400]"
					>
						<SvgoOkru
							:font-controlled="false"
							class="ml-px size-6 text-white"
						/>
					</a>
				</div>
			</div>
			<div>
				<p class="typo-small mb-3 font-semibold">Направления</p>
				<ul class="typo-small space-y-2 text-neutral-500">
					<li>
						<NuxtLink
							to="/bus-tours"
							class="transition-colors hover:text-neutral-900"
							>Автобусные туры к морю</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="/excursions"
							class="transition-colors hover:text-neutral-900"
							>Экскурсионные туры</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							:to="{ name: 'index', hash: '#bus-rent' }"
							class="transition-colors hover:text-neutral-900"
							>Аренда микроавтобусов</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							:to="{ name: 'index', hash: '#tour-selection' }"
							class="transition-colors hover:text-neutral-900"
							>Подбор тура</NuxtLink
						>
					</li>
				</ul>
			</div>
			<div>
				<p class="typo-small mb-3 font-semibold">Компания</p>
				<ul class="typo-small space-y-2 text-neutral-500">
					<li>
						<NuxtLink
							:to="{ name: 'about-us' }"
							class="transition-colors hover:text-neutral-900"
							>О нас</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							:to="{ name: 'tourist-reminder' }"
							class="transition-colors hover:text-neutral-900"
							>Памятка туристу</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							:to="{ name: 'agreement' }"
							class="transition-colors hover:text-neutral-900"
							>Соглашения</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							:to="{ name: 'privacy-policy' }"
							class="transition-colors hover:text-neutral-900"
							>Политика персональных данных</NuxtLink
						>
					</li>
				</ul>
			</div>
			<div id="contacts">
				<p
					id="contacts-focus"
					class="typo-small mb-3 font-semibold"
				>
					Контакты
				</p>
				<ul class="typo-small space-y-2 text-neutral-500">
					<li>
						<a
							href="tel:+74862780958"
							class="hover:text-primary-600 font-semibold text-neutral-900 transition-colors"
							itemprop="telephone"
							>+7 (4862) 78-09-58</a
						>
					</li>
					<li>
						<a
							href="mailto:avtobus-orel.petlaj@yandex.ru"
							class="break-all transition-colors hover:text-neutral-900"
							itemprop="email"
							>avtobus-orel.petlaj@yandex.ru</a
						>
					</li>
					<li>
						<a
							href="https://yandex.ru/maps/org/turisticheskoye_agentstvo_galatur/1067897790/?ll=36.060826%2C52.953087&z=14.36"
							target="_blank"
							rel="noopener noreferrer"
							class="transition-colors hover:text-neutral-900"
							itemprop="address"
							>г. Орёл, ул. Комсомольская 88, оф. 6</a
						>
					</li>
					<li class="typo-caption text-secondary-900">
						Офис работает по предварительной записи
					</li>
				</ul>
			</div>
		</div>
		<div class="border-t border-neutral-200/60">
			<div
				class="typo-caption mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-6 py-5 text-neutral-400"
			>
				<div
					class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
				>
					<span>© {{ fullYear }} ГалаТур, Орёл</span>
					<span
						>Информация на сайте не является публичной офертой ·
						<a
							href="/sitemap.xml"
							class="underline-offset-2 transition-colors hover:text-neutral-600 hover:underline"
							>Карта сайта</a
						></span
					>
				</div>
				<div
					class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
				>
					<span>ИП Петлай Г.В. · ИНН 572000036383 · ОГРН 304572027400096</span>
					<span class="flex items-center gap-2">
						<span>Мы в реестре туроператоров:</span>
						<a
							href="https://ev.economy.gov.ru/lk_exp/registry/ta/bf9378f1-bef4-4834-8465-cfe10e86eca7"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1.5 font-semibold text-neutral-600 underline-offset-2 transition-colors hover:text-neutral-900 hover:underline"
						>
							<img
								src="/images/reestr.svg"
								alt=""
								class="h-6 w-auto"
							/>
							РТА 0012099
						</a>
					</span>
				</div>
			</div>
		</div>
	</footer>
</template>
