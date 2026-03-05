<script setup lang="ts">
import { getExcursion } from '@/entities/excursion/api/excursion.api';

const route = useRoute();

const excursionId = computed(() => route.params.id as string);

const { data, error } = await getExcursion(excursionId);

const endWordDayCheck = computed(() => {
	if (data.value?.duration) {
		if (data.value?.duration === 1) {
			return `${data.value.duration} день`;
		} else if (data.value.duration > 1 && data.value.duration < 5) {
			return `${data.value.duration} дня`;
		} else {
			return `${data.value.duration} дней`;
		}
	} else {
		return '';
	}
});

// перекидываем на 404, если бэк выловил невалидный id
if (error.value) {
	throw createError({
		status: error.value?.statusCode,
		message: error.value?.message || error.value?.statusMessage,
		fatal: true
	});
}

const donwloadFile = async () => {
	const response = await $fetch(`/api/s3/download/${data.value?.fileName[0]}`);
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
				{{ `Экскурсия: ${data?.name}` }}
			</Title>
			<Meta
				name="description"
				:content="`${data?.name} &#8212; Экскурсионный тур в ${data?.cities?.join(', ')} из Орла.`"
			/>
			<Meta
				name="og:title"
				:content="`Эскурсионный тур в ${data?.cities?.join(', ')}, ${data?.name}`"
			/>
			<Meta
				name="og:description"
				:content="`${data?.name} &#8212; Экскурсионный тур в ${data?.cities?.join(', ')} из Орла.`"
			/>
			<Meta
				name="keywords"
				content="экскурсионные туры из Орла, экскурсии Орел, экскурсии на автобусе, недорогие экскурсии из Орла, экскурсии"
			/>
		</Head>
		<div
			class="max-w-container flex w-full flex-col gap-5 py-10 dark:bg-gray-800"
		>
			<WidgetsHeaderItem
				:title="data?.name"
				:price="data?.price"
				price-description="Минимально возможная цена за человека"
				:cities="data?.cities"
				:duration="data?.duration"
			/>
			<SharedGalleryBaseGallery
				v-if="data?.images"
				:images="data.images"
			/>

			<div class="grid grid-flow-col gap-6">
				<div class="flex flex-col gap-4">
					<div
						v-if="data?.excursionStartDates?.length"
						id="ex-dates"
						class="dark:text-slate-200"
					>
						<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
							Даты предстоящих экскурсий
						</h3>
						<div class="flex flex-row whitespace-nowrap">
							<span
								v-for="(date, idx) in data.excursionStartDates"
								:key="idx"
							>
								{{ $dayjs(date).format('DD.MM.YYYY')
								}}<template v-if="idx !== data.excursionStartDates.length - 1"
									>,&nbsp;</template
								>
							</span>
						</div>
					</div>
					<hr class="my-4" />
					<SharedFontsHeading
						class="mb-2"
						variant="display-md"
					>
						Программа тура
					</SharedFontsHeading>
					<div
						v-for="(dayContent, index) in data?.description"
						:key="index"
						class="flex mb-8"
					>
						<EntitiesExcursionDayContent
							:day="index + 1"
							:text="dayContent"
						/>
					</div>
					<div
						v-if="data?.thePriceIncludes?.length"
						class=""
					>
						<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
							В стоимость входит
						</h3>
						<div class="flex flex-col gap-y-3">
							<div
								v-for="item in data?.thePriceIncludes"
								:key="item"
								class="flex w-full flex-row items-start gap-x-2 dark:text-slate-200"
							>
								<div>
									<SharedIconsCheckIcon
										width="24px"
										height="24px"
									/>
								</div>
								{{ item }}
							</div>
						</div>
					</div>
					<hr
						v-if="data?.additionallyPaid?.length"
						class="m-y-3 w-full bg-slate-200"
					/>
					<div
						v-if="data?.additionallyPaid?.length"
						class=""
					>
						<h3 class="mb-2 text-xl font-semibold dark:text-slate-200">
							Дополнительно оплачивается
						</h3>
						<div class="flex flex-col gap-y-3">
							<div
								v-for="item in data?.additionallyPaid"
								:key="item"
								class="flex w-full flex-row items-start gap-x-2 dark:text-slate-200"
							>
								<div>
									<SharedIconsCheckIcon
										width="24px"
										height="24px"
									/>
								</div>
								{{ item }}
							</div>
						</div>
					</div>
				</div>

				<div class="w-96">
					<div class="sticky top-20">
						<div
							class="flex h-fit w-full flex-col gap-2 rounded-xl p-4 shadow-lg"
						>
							<SharedLayoutsIconWithInfo
								icon-name="map-pin"
								:text="data?.cities?.join(', ') ?? ''"
							/>
							<SharedLayoutsIconWithInfo
								icon-name="clock-fading"
								:text="endWordDayCheck"
							/>

							<button
								v-if="data?.fileName?.length && data?.fileName[0]"
								type="button"
								class="mb-2 min-h-14 w-full min-w-40 rounded-xl bg-primary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-primary-500/95 md:w-52"
								@click.prevent="donwloadFile"
							>
								Скачать прайс
							</button>
						</div>
					</div>
				</div>
			</div>

			<hr class="m-y-3 w-full bg-slate-200" />
			<SharedFontsText variant="body-lg">
				Компания организатор оставляет за собой право вносить некоторые
				изменения в программу тура без уменьшения общего объема и качества
				услуг, в том числе предоставлять замену отеля на равнозначный. Компания
				организатор не несет ответственности за задержки, возникшие в результате
				пробок на дорогах, в случае тяжелой дорожной ситуации возможны поздние
				приезды в отели, объекты экскурсий. В случае особых непредвиденных
				ситуаций возможны изменения в порядке проведения экскурсий, объем
				программы при этом не меняется.
			</SharedFontsText>
		</div>
	</div>
</template>
