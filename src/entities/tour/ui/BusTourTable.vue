<script setup lang="ts">
import type { IHotelRoomModel } from '../model/hotelRoom.model';

export interface Props {
	tours?: IHotelRoomModel[];
}

const props = withDefaults(defineProps<Props>(), {
	tours: () => []
});

const selectedRooms = ref(
	props.tours?.filter((x) => x.availability?.length).map((x) => x.roomName)
);

const rooms = computed(() => props.tours.map((x) => x.roomName));

const filteredTours = computed(() =>
	props.tours.filter((x) => selectedRooms.value.includes(x.roomName))
);

const hasAvailability = computed(() =>
	props.tours.some((x) => x.availability?.length)
);

const toggleRoom = (room: string): void => {
	const index = selectedRooms.value.indexOf(room);
	if (index === -1) {
		selectedRooms.value.push(room);
	} else {
		selectedRooms.value.splice(index, 1);
	}
};

const formatPrice = (price?: number): string =>
	price ? `от ${new Intl.NumberFormat('ru-RU').format(price)} ₽` : '';
</script>
<template>
	<div v-if="hasAvailability">
		<div
			v-if="rooms.length > 1"
			class="mb-5 flex flex-wrap gap-2"
		>
			<button
				v-for="(room, index) in rooms"
				:key="index"
				type="button"
				class="typo-small rounded-full border px-3.5 py-1.5 font-medium transition-all active:scale-95"
				:class="
					selectedRooms.includes(room)
						? 'border-secondary-600 bg-secondary-600 text-white'
						: 'border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
				"
				@click="toggleRoom(room)"
			>
				{{ room }}
			</button>
		</div>

		<div class="overflow-hidden rounded-2xl border border-neutral-200">
			<template
				v-for="(tour, index) in filteredTours"
				:key="index"
			>
				<div
					v-for="(datesAndPrices, dataIndex) in tour.availability"
					:key="dataIndex"
					class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-4"
					:class="dataIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'"
				>
					<div>
						<p class="typo-body font-semibold">
							{{ $dayjs(datesAndPrices.startDate).format('DD.MM.YYYY') }} —
							{{ $dayjs(datesAndPrices.endDate).format('DD.MM.YYYY') }}
						</p>
						<p
							v-if="tour.roomName"
							class="typo-small text-neutral-500"
						>
							{{ tour.roomName }}
						</p>
					</div>
					<p class="typo-body font-bold">
						{{
							formatPrice(datesAndPrices?.pricePerPerson) ||
							'Цену уточняйте по телефону'
						}}
					</p>
				</div>
			</template>
		</div>
	</div>
	<SharedInformersEmptyDataInformer
		v-else
		text="Данных о датах и ценах пока нет"
	/>
</template>
