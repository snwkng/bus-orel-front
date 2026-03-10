<script setup lang="ts">
import { useScrollLock } from '@vueuse/core';

const emit = defineEmits(['close']);

const isLocked = useScrollLock(document.body);

// Локальное состояние для запуска анимации
const isMounted = ref(false);

const handleKeyDown = (e: KeyboardEvent) => {
	if (e.key === 'Escape') handleClose();
};

onMounted(() => {
	isMounted.value = true;
	isLocked.value = true;
	window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
	isLocked.value = false;
	window.removeEventListener('keydown', handleKeyDown);
});

// Метод для плавного закрытия
const handleClose = () => {
	isMounted.value = false;
	// Ждем окончания анимации (например, 300ms) перед тем как удалить из стора
	setTimeout(() => emit('close'), 300);
};
</script>

<template>
	<ClientOnly>
		<Teleport to="body">
			<div class="fixed inset-0 z-[1000] flex items-center justify-center">
				<Transition
					name="fade"
					appear
				>
					<div
						v-if="isMounted"
						class="absolute inset-0 bg-black/40 backdrop-blur-sm"
						@click="handleClose"
					/>
				</Transition>
				<Transition
					name="slide-fade"
					appear
				>
					<!-- modal-container -->
					<div
						v-if="isMounted"
						class="fixed bottom-0 left-0 right-0 z-[1001] p-0 sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:w-fit sm:max-w-[500px] sm:p-5"
					>
						<!-- modal-content -->
						<div
							class="relative h-fit max-h-[30vh] rounded-xl rounded-t-xl bg-white p-6"
						>
							<button
								class="absolute right-2 top-2 flex cursor-pointer items-center justify-center rounded-full p-2 transition-all hover:bg-neutral-200"
								aria-label="Close"
								@click="handleClose"
							>
								<Icon
									name="lucide:x"
									size="24"
								/>
							</button>
							<slot :close="handleClose" />
						</div>
					</div>
				</Transition>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<style scoped>
.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateY(100%); /* На мобилках выезжает из-за края экрана */
	opacity: 1; /* Оставляем непрозрачным для эффекта шторки */
}

@media (min-width: 768px) {
	.slide-fade-enter-from {
		transform: translateY(40px);
		opacity: 0;
	}
	.slide-fade-leave-to {
		transform: translateY(60px);
		opacity: 0;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

/* Анимация Контента (Всплытие снизу + Fade) */
.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
	transition: all 0.25s ease-in;
}
.slide-fade-enter-from {
	transform: translateY(40px);
	opacity: 0;
}
.slide-fade-leave-to {
	transform: translateY(60px);
	opacity: 0;
}
</style>
