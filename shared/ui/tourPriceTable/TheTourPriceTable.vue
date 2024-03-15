<script setup lang="ts">
import type { ITourTable } from '~/entities/tour/model/types';

export interface Props {
	tours: ITourTable[];
}

const props = withDefaults(defineProps<Props>(), {
	tours: () => []
});
</script>
<template>
	<div class="overflow-x-auto">
		<table
			class="text-surface min-w-full text-left text-sm font-light dark:text-white"
			aria-describedby="tours"
		>
			<tbody>
				<tr
					v-for="(tableData, tableDataIndex) in props.tours"
					:key="tableDataIndex"
					class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
				>
					<td class="whitespace-nowrap px-6 py-4 font-medium">
						{{ tableData.startDate }} - {{ tableData.endDate }}
					</td>
					<td
						v-for="(roomData, roomIndex) in tableData.rooms"
						:key="roomIndex"
						class="whitespace-nowrap px-6 py-4"
					>
						<div class="flex flex-col">
							<span class="text-base">{{ roomData.room }}</span>
							<strong class="font-semibold">{{ roomData.price }} &#8381;</strong>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
