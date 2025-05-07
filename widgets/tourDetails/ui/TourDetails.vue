<script setup lang="ts">
const { BASE_URL } = useRuntimeConfig().public;
const store = useTourStore();

const route = useRoute();
const tourId = route.params.id as string;

await useAsyncData(
	'tour',
	(): Promise<boolean> => store.getTour(tourId).then(() => true)
);

const donwloadFile = async () => {
	const response = await $fetch(
		`${BASE_URL}/api/s3/download/${store.tour.documentName}`
	);
	const link = document.createElement('a')
	link.href = URL.createObjectURL(response as Blob);
	link.click();
	URL.revokeObjectURL(link.href);
};
</script>
<template>
	<div class="w-full dark:bg-gray-800">
		<Head>
			<Title>
				{{
					`Автобусный тур в ${store.tour?.city?.name}, ${store.tour.type} ${store.tour.name}`
				}}
			</Title>
			<Meta
				name="description"
				:content="`Автобусный тур в ${store.tour.city} из Орла.`"
			/>
			<Meta
				name="keywords"
				content="автобусные туры к морю, поездки на море, автобусные поездки, недорогие туры на море из Орла, автобусом к морю, автобусные туры на море, отдых на море автобусом"
			/>
		</Head>
		<div
			class="px-base m-auto flex w-full flex-col gap-5 py-10 dark:bg-gray-800 xl:w-[1280px]"
		>
			<div
				class="rounded-xl bg-slate-100 px-5 py-3 font-semibold dark:bg-gray-700 dark:text-slate-200"
			>
				УВАЖАЕМЫЕ ТУРИСТЫ ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, ВО МНОГИХ ОТЕЛЯХ ДИНАМИЧЕСКОЕ
				ЦЕНООБРАЗОВАНИЕ, ПЕРЕД БРОНИРОВАНИЕМ ПОСТАРАЙТЕСЬ ЛУЧШЕ УТОЧНИТЬ
				АКТУАЛЬНЫЙ ПРАЙС. НАДЕЕМСЯ НА ВАШЕ ПОНИМАНИЕ! КОНСУЛЬТАЦИЯ И
				БРОНИРОВАНИЕ:
				<span class="text-red-700 dark:text-red-300">ТЕЛ. +79036370958</span>
			</div>
			<div class="flex flex-col justify-between sm:flex-row sm:items-center">
				<h1
					class="mb-2 text-3xl font-bold dark:text-slate-200 sm:text-xl md:text-4xl"
				>
					{{ store.tour.type }} {{ store.tour.name }}
				</h1>
				<div class="flex flex-col gap-x-1 sm:items-end">
					<span class="font-semibold dark:text-slate-200">
						от {{ store.tour.price }}₽
					</span>
					<span class="text-sm text-slate-400 sm:text-right">
						Минимально возможная цена за 1 туриста при 2-х местном размещении
					</span>
				</div>
			</div>
			<SharedUiGalleryTheGallery
				:images="store.tour.images"
				path="hotels"
			/>
			<div class="">
				<button
					v-if="store.tour.documentName"
					type="button"
					class="mb-2 min-h-14 w-full min-w-40 rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95 md:w-52"
					@click.prevent="donwloadFile"
				>
					Скачать прайс
				</button>
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Расположение
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.locationDescription }}
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Размещение
				</h3>
				<div v-for="(room, roomIndex) in store.tour.tours" :key="roomIndex">
					<div class="py-2">
						<strong>
							{{ room.roomName }}:
						</strong>
						{{ room.inRoom }}
					</div>
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Питание
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.food }}
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Пляж
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.beach }}. до пляжа {{ store.tour.distanceToBeach }}.
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Заселение
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour.checkInConditions }}
				</div>
			</div>
			<hr />
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					В стоимость включено
				</h3>
				<div class="dark:text-slate-200">
					{{ store.tour?.thePriceIncludes.join(', ') }}
				</div>
			</div>
			<hr />
			<div v-if="store.tour.tours?.length" class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Даты и цены
				</h3>
				<SharedUiTableBusTourTable :tours="store.tour.tours" />
			</div>
		</div>
	</div>
</template>
