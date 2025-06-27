<script setup lang="ts">
import type { ITour } from '~/entities/tour/model/types';

// const store = useTourStore();

// const { tour } = storeToRefs(store);

const route = useRoute();
const tourId = computed(() => route.params.id as string);
const tourTitle = computed(() => data.value?.type || data.value?.name ? `${data.value?.type} ${data.value?.name}` : '');
const tourCity = computed(() =>
	data.value?.address?.fullAddress || data.value?.address?.city
		? [data.value?.address?.fullAddress ?? data.value?.address?.city]
		: []
);

const { data } = await useFetch<ITour>(`/api/bus-tours/${tourId.value}`, {
	key: `bus-tour-${tourId.value}`,
});

// await callOnce(`tour-${tourId.value}`, () => store.getTour(tourId.value), {
// 	mode: 'navigation'
// });

// await useAsyncData(
// 	'tour',
// 	(): Promise<boolean> => store.getTour(tourId).then(() => true)
// );

const donwloadFile = async () => {
	const response = await $fetch(
		`/api/s3/download/${data.value?.documentName}`
	);
	const link = document.createElement('a');
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
					`Автобусный тур в ${data?.address?.city}, ${data?.type} ${data?.name}`
				}}
			</Title>
			<Meta
				name="description"
				:content="`Автобусный тур в ${data?.address?.city} из Орла.`"
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
			<WidgetsHeaderItem
				:title="tourTitle"
				:price="data?.minPrice"
				price-description="Минимально возможная цена за 1 туриста при 2-х местном размещении"
				:cities="tourCity"
			/>
			<SharedUiGalleryTheGallery
				:images="data?.images ?? []"
			/>
			<div class="">
				<button
					v-if="data?.documentName"
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
					{{ data?.address?.fullAddress }}
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Размещение
				</h3>
				<div
					v-for="(room, roomIndex) in data?.tours"
					:key="roomIndex"
				>
					<div class="py-2 dark:text-slate-200">
						<strong> {{ room?.roomName }}: </strong>
						{{ room?.description }}
					</div>
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">Питание</h3>
				<div class="dark:text-slate-200">
					{{ data?.additionalInfo?.food?.type }}
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">Пляж</h3>
				<div class="dark:text-slate-200">
					{{ data?.additionalInfo?.beach?.type }}. до пляжа
					{{ data?.additionalInfo?.beach?.distanceMinutes }} мин.
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Заселение
				</h3>
				<div class="dark:text-slate-200">
					{{ data?.additionalInfo?.checkInOut?.checkIn }} -
					{{ data?.additionalInfo?.checkInOut?.checkOut }}
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					В стоимость включено
				</h3>
				<div class="dark:text-slate-200">
					{{ data?.includedInThePrice?.map((x) => x?.serviceName)?.join(', ') }}
				</div>
			</div>
			<hr>
			<div
				v-if="data?.tours?.length"
				class=""
			>
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Даты и цены
				</h3>
				<SharedUiTableBusTourTable :tours="data.tours" />
			</div>
		</div>
	</div>
</template>
