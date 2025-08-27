<script setup lang="ts">
import type { IHotelRoomInfo, ITour } from '~/entities/tour/model/types';

const { BASE_URL } = useRuntimeConfig().public

const route = useRoute();

useHead({
	link: [{ rel: 'canonical', href: BASE_URL + (route.path === '/' ? '' : route.path) }],
})

const tourId = computed(() => route.params.id as string);
const tourTitle = computed(() => data.value?.type || data.value?.name ? `${data.value?.type} ${data.value?.name}` : '');
const tourCity = computed(() =>
	data.value?.address?.fullAddress || data.value?.address?.city
		? [data.value?.address?.fullAddress ?? data.value?.address?.city]
		: []
);

const hasRoomsinfo = computed(() => data.value?.tours?.some((x: IHotelRoomInfo) => x.roomName))

const { data, error } = await useFetch<ITour>(`/api/bus-tours/${tourId.value}`, {
	key: `bus-tour-${tourId.value}`,
});

if (error.value) {
	throw createError({ statusCode: error.value?.statusCode, statusMessage: error.value?.data?.statusMessage || error.value?.statusMessage });
}

const donwloadFile = async () => {
	const response = await $fetch(
		`/api/s3/download/${data.value?.documentName[0]}`
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
			<Meta name="og:title" :content="`Автобусный тур в ${data?.address?.city}, ${data?.type} ${data?.name}`" />
			<Meta name="og:description" :content="`Автобусный тур в ${data?.address?.city} из Орла.`" />
		</Head>
		<div
			class="flex w-full flex-col gap-5 py-10 dark:bg-gray-800 max-w-container"
		>
			<div
				class="rounded-xl bg-slate-100 px-5 py-3 font-semibold dark:bg-gray-700 dark:text-slate-200"
			>
				УВАЖАЕМЫЕ ТУРИСТЫ ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, ВО МНОГИХ ОТЕЛЯХ ДИНАМИЧЕСКОЕ
				ЦЕНООБРАЗОВАНИЕ, ПЕРЕД БРОНИРОВАНИЕМ, ПОЖАЛУЙСТА, УТОЧНИТЕ
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
					v-if="data?.documentName?.length && data.documentName[0]"
					type="button"
					class="mb-2 min-h-14 w-full min-w-40 rounded-xl bg-deep-orange px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-deep-orange/95 md:w-52"
					@click.prevent="donwloadFile"
				>
					Скачать прайс
				</button>
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Описание
				</h3>
				<div class="dark:text-slate-200">
					{{ data?.description }}
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Размещение
				</h3>
				<div v-if="hasRoomsinfo">
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
				<LazySharedUiInformersEmptyDataInformer v-else text="Данных о номерах пока нет" />
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
					<span v-if="data?.additionalInfo?.beach?.type">{{ data.additionalInfo.beach.type }}.</span>
					<span v-if="data?.additionalInfo?.beach?.distanceMinutes"> До пляжа {{ data.additionalInfo.beach.distanceMinutes }} мин.</span>
				</div>
			</div>
			<hr>
			<div class="">
				<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
					Заселение / Выселение
				</h3>
				<div class="dark:text-slate-200">
					<span v-if="data?.additionalInfo?.checkInOut?.checkIn">Заселение с {{ data.additionalInfo.checkInOut.checkIn }}</span>
					<span v-if="data?.additionalInfo?.checkInOut?.checkIn && data?.additionalInfo?.checkInOut?.checkOut"> - </span>
					<span v-if="data?.additionalInfo?.checkInOut?.checkOut"> выселение до {{ data.additionalInfo.checkInOut.checkOut }}</span>
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
