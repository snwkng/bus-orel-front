<script setup lang="ts">
import { getExcursion } from '@/entities/excursion/api/excursion.api';

const route = useRoute();

const dayjs = useDayjs();

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

const dates = computed(
	() =>
		data.value?.excursionStartDates
			?.map((date) => dayjs(date).format('DD.MM.YYYY'))
			?.join(', ') ?? ''
);

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
			<div
				class="w-fulll flex flex-col items-end justify-between gap-y-2 sm:flex-row sm:gap-y-0 mb-4"
			>
				<SharedFontsHeading
					variant="display-lg"
					weight="bold"
				>
					{{ data?.name }}
				</SharedFontsHeading>
				<button
					v-if="data?.fileName?.length && data?.fileName[0]"
					type="button"
					class="min-h-14 w-full min-w-40 rounded-xl bg-secondary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-secondary-500/95 md:w-52"
					@click.prevent="donwloadFile"
				>
					Скачать прайс
				</button>
			</div>

			<SharedGalleryBaseGallery
				v-if="data?.images"
				:images="data.images"
			/>

			<div class="grid gap-6 md:grid-flow-col">
				<div class="order-2 flex flex-col gap-4 md:order-1">
					<SharedFontsHeading
						class="mb-2"
						variant="heading-xl"
					>
						Программа тура
					</SharedFontsHeading>
					<div
						v-for="(dayContent, index) in data?.description"
						:key="index"
						class="mb-8 flex"
					>
						<EntitiesExcursionDayContent
							:day="index + 1"
							:text="dayContent"
						/>
					</div>
				</div>

				<div class="order-1 w-full md:order-2 md:w-96">
					<div class="sticky top-20">
						<div
							class="flex h-fit w-full flex-col gap-3 rounded-xl p-4 shadow-xl dark:bg-gray-700"
						>
							<SharedLayoutsIconWithInfo
								icon-name="map-pin"
								title="Город(-а)"
								:text="data?.cities?.join(', ') ?? ''"
							/>
							<SharedLayoutsIconWithInfo
								icon-name="clock-fading"
								title="Длительность"
								:text="endWordDayCheck"
							/>

							<SharedLayoutsIconWithInfo
								title="Даты предстоящих экскурсий"
								icon-name="calendar-days"
								:text="dates"
							/>

							<div
								v-if="data?.price"
								class="flex flex-col items-center justify-center"
							>
								<div class="rounded-xl bg-primary-50 px-4 py-2">
									<SharedFontsText variant="body-2xl" color="dark-only">
										от {{ data?.price }}₽
									</SharedFontsText>
								</div>
								<SharedFontsText
									variant="caption-lg"
									color="muted"
								>
									Минимально возможная цена за человека
								</SharedFontsText>
							</div>

							<button
								type="button"
								class="min-h-14 w-full rounded-xl bg-primary-500 px-4 py-2 text-xl font-semibold text-white transition-all hover:bg-primary-500/95"
							>
								Забронировать
							</button>
						</div>
					</div>
				</div>
			</div>

			<hr class="m-y-3 w-full bg-neutral-200" />

			<EntitiesConditionsBlock
				:included="data?.thePriceIncludes"
				:excluded="data?.additionallyPaid"
				included-title="Включено"
				excluded-title="Оплачивается отдельно"
				title="Условия тура"
			/>

			<hr class="m-y-3 w-full bg-neutral-200" />
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
