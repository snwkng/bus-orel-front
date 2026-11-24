<script setup lang="ts">
type ContactModalSubject = 'common' | 'tour' | 'excursion' | 'rent';
type ContactModalMode = 'booking' | 'question';

interface ModalText {
	heading: string;
	body: string;
	hint: string;
}

interface IProps {
	subject?: ContactModalSubject;
	mode?: ContactModalMode;
	context?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	subject: 'common',
	mode: 'booking',
	context: undefined
});

const emit = defineEmits<(e: 'close') => void>();

const TEXTS: Record<
	ContactModalSubject,
	Record<ContactModalMode, ModalText>
> = {
	common: {
		booking: {
			heading: 'Как с нами связаться',
			body: 'Позвоните или напишите нам — подберём тур, ответим на вопросы и поможем с бронированием. Это бесплатно и ни к чему не обязывает.',
			hint: 'Если вопрос по конкретному туру — назовите его, так мы ответим быстрее.'
		},
		question: {
			heading: 'Как с нами связаться',
			body: 'Позвоните или напишите нам — подберём тур, ответим на вопросы и поможем с бронированием. Это бесплатно и ни к чему не обязывает.',
			hint: 'Если вопрос по конкретному туру — назовите его, так мы ответим быстрее.'
		}
	},
	tour: {
		booking: {
			heading: 'Как забронировать тур',
			body: 'Онлайн-оплаты на сайте нет — бронируем лично через менеджера. Проверим места на ваши даты, зафиксируем цену и расскажем об отеле и дороге.',
			hint: 'Назовите менеджеру тур и желаемые даты — этого достаточно, чтобы начать.'
		},
		question: {
			heading: 'Вопрос по туру',
			body: 'Расскажем об отеле, питании, дороге и свободных местах на интересующие даты — позвоните или напишите, ответим лично.',
			hint: 'Назовите тур, о котором спрашиваете, — так мы ответим быстрее.'
		}
	},
	excursion: {
		booking: {
			heading: 'Как забронировать экскурсию',
			body: 'Онлайн-оплаты на сайте нет — бронируем лично через менеджера. Проверим свободные места на выбранную дату и зафиксируем стоимость.',
			hint: 'Назовите экскурсию и желаемую дату поездки — этого достаточно, чтобы начать.'
		},
		question: {
			heading: 'Вопрос по экскурсии',
			body: 'Подскажем по маршруту, длительности поездки, датам выезда и остановкам в пути — позвоните или напишите, ответим лично.',
			hint: 'Назовите экскурсию, о которой спрашиваете, — так мы ответим быстрее.'
		}
	},
	rent: {
		booking: {
			heading: 'Аренда автобуса',
			body: 'Рассчитаем стоимость аренды под вашу поездку: автобусы и микроавтобусы с водителем для свадеб, корпоративов, экскурсий и поездок на море своей компанией.',
			hint: 'Назовите дату, маршрут и количество пассажиров — этого достаточно для расчёта.'
		},
		question: {
			heading: 'Аренда автобуса',
			body: 'Рассчитаем стоимость аренды под вашу поездку: автобусы и микроавтобусы с водителем для свадеб, корпоративов, экскурсий и поездок на море своей компанией.',
			hint: 'Назовите дату, маршрут и количество пассажиров — этого достаточно для расчёта.'
		}
	}
};

const text = computed(() => TEXTS[props.subject][props.mode]);

const onKeydown = (e: KeyboardEvent): void => {
	if (e.key === 'Escape') emit('close');
};

onMounted(() => globalThis.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => globalThis.removeEventListener('keydown', onKeydown));
</script>
<template>
	<Teleport to="body">
		<div
			class="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm sm:items-center sm:p-6"
			@click.self="emit('close')"
		>
			<div
				role="dialog"
				aria-modal="true"
				:aria-label="text.heading"
				class="w-full max-w-110 rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
			>
				<div class="mb-1 flex items-start justify-between gap-4">
					<h3 class="typo-h3">{{ text.heading }}</h3>
					<button
						type="button"
						class="-m-1 flex size-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
						aria-label="Закрыть"
						@click="emit('close')"
					>
						<Icon
							name="lucide:x"
							class="size-4.5"
						/>
					</button>
				</div>

				<p
					v-if="context"
					class="bg-secondary-50 text-secondary-700 mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold"
				>
					{{ context }}
				</p>

				<p class="typo-small mb-5 text-neutral-500">
					{{ text.body }}
				</p>

				<div class="space-y-3">
					<a
						href="tel:+74862780958"
						class="group border-secondary-200 hover:border-secondary-500 flex items-center gap-4 rounded-2xl border p-4 transition-all hover:shadow-sm"
					>
						<span
							class="bg-secondary-600 flex size-11 shrink-0 items-center justify-center rounded-full text-white"
						>
							<Icon
								name="lucide:phone"
								class="size-5"
							/>
						</span>
						<span class="min-w-0">
							<span class="typo-small block font-bold">+7 (4862) 78-09-58</span>
							<span class="typo-caption block text-neutral-500"
								>Ежедневно с 9:00 до 20:00</span
							>
						</span>
						<Icon
							name="lucide:arrow-right"
							class="text-secondary-600 ml-auto size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
						/>
					</a>

					<a
						href="https://vk.com/gtorel"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition-all hover:border-neutral-400 hover:shadow-sm"
					>
						<span
							class="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0077FF] text-sm font-black text-white"
						>
							VK
						</span>
						<span class="min-w-0">
							<span class="typo-small block font-bold"
								>Написать в сообщения группы</span
							>
							<span class="typo-caption block text-neutral-500"
								>vk.com/gtorel · отвечаем в течение часа</span
							>
						</span>
						<Icon
							name="lucide:arrow-up-right"
							class="ml-auto size-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						/>
					</a>
				</div>

				<p class="typo-caption mt-4 flex items-start gap-2 text-neutral-400">
					<Icon
						name="lucide:info"
						class="mt-0.5 size-3.5 shrink-0"
					/>
					{{ text.hint }}
				</p>
			</div>
		</div>
	</Teleport>
</template>
