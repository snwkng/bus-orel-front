<script setup lang="ts">
interface IProps {
	mode?: 'booking' | 'question';
	context?: string;
}

const props = withDefaults(defineProps<IProps>(), {
	mode: 'booking',
	context: undefined
});

const emit = defineEmits<(e: 'close') => void>();

const heading = computed(() =>
	props.mode === 'booking' ? 'Как забронировать' : 'Как с нами связаться'
);

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
				:aria-label="heading"
				class="w-full max-w-110 rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
			>
				<div class="mb-1 flex items-start justify-between gap-4">
					<h3 class="typo-h3">{{ heading }}</h3>
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
					Онлайн-оплаты на сайте нет — бронируем лично через менеджера. Это
					бесплатно и ни к чему не обязывает: ответим на вопросы, подскажем по
					местам и зафиксируем цену.
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
					Назовите менеджеру тур и желаемую дату — этого достаточно, чтобы
					начать.
				</p>
			</div>
		</div>
	</Teleport>
</template>
