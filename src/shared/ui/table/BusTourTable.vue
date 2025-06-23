<script setup lang="ts">
import type { IHotelRoomInfo } from '~/entities/tour/model/types';

export interface Props {
	tours?: IHotelRoomInfo[];
}

const props = withDefaults(defineProps<Props>(), {
	tours: () => []
});

const selectedRooms = ref(props.tours.map((x: IHotelRoomInfo) => x.roomName) || [])

const rooms = computed(() => props.tours.map((x: IHotelRoomInfo) => x.roomName));

const filteredTours =
	computed(
		() => props.tours.filter((x: IHotelRoomInfo) => selectedRooms.value.includes(x.roomName))
	);
</script>
<template>
	<div class="grid">
		<div class="mb-6 flex gap-2 rounded-xl bg-slate-100 px-6 py-4 dark:bg-gray-700 dark:text-slate-200">
			<div
				v-for="(room, index) in rooms"
				:key="index"
			>
				<SharedUiFormsTheCheckbox
					v-model="selectedRooms"
					:checkbox-id="`${room}_${index}`"
					:label="room"
					:value="room"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div
				v-for="(tour, index) in filteredTours"
				:key="index"
				class="flex flex-col gap-2"
			>
				<div
					v-for="(datesAndPrices, dataIndex) in tour.availability"
					:key="dataIndex"
					class="flex items-center justify-between gap-2 rounded-xl bg-slate-200 p-4 transition-all hover:bg-slate-300 dark:bg-gray-700 dark:text-slate-200 hover:dark:bg-gray-500"
				>
					<div class="flex items-center gap-2">
						<div class="mr-6 font-semibold">
							{{ $dayjs(datesAndPrices.startDate).format('DD.MM.YYYY') }} -
							{{ $dayjs(datesAndPrices.endDate).format('DD.MM.YYYY') }}
						</div>
						<div>{{ tour.roomName }}</div>
					</div>
					<div
						class="rounded-xl bg-deep-blue p-2 font-semibold text-white text-center"
					>
						<span v-if="datesAndPrices.price">от {{ datesAndPrices.price }}&#8381;</span>
						<span v-else>Уточните по телефону</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
