<script setup lang="ts">
interface IProps {
	title?: string;
}

withDefaults(defineProps<IProps>(), {
	title: ''
});

const model = defineModel<boolean>({ default: false });

const dialogRef = ref<HTMLDialogElement | null>(null);
const modalRef = ref<HTMLElement | null>(null);

const closeModal = () => {
	if (dialogRef.value) {
		dialogRef.value.close();
		model.value = false;
	}
};

const handleBackdropClick = (e: MouseEvent) => {
	if (e.target === dialogRef.value) {
		closeModal();
	}
};

watch(
	() => model.value,
	async (isOpen) => {
		if (import.meta.client) {
			if (isOpen) {
				document.body.classList.add('lock');
			} else {
				document.body.classList.remove('lock');
			}
		}

		await nextTick();

		if (isOpen && dialogRef.value) {
			try {
				if (!dialogRef.value.open) {
					dialogRef.value.showModal();
				}
				focusFirstElement();
			} catch (error) {
				console.warn('Ошибка при открытии диалога:', error);
			}
		}
	},
	{ immediate: true }
);

const focusFirstElement = () => {
	if (modalRef.value) {
		const focusableElements = modalRef.value.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);

		if (focusableElements.length > 0) {
			(focusableElements[0] as HTMLElement).focus();
		}
	}
};

onUnmounted(() => {
	document.body.classList.remove('lock');
});
</script>
<template>
	<ClientOnly>
		<Teleport to="body">
			<dialog
				ref="dialogRef"
				class="mx-auto my-8 w-full max-w-md border-0 bg-transparent p-0 backdrop:bg-black/50"
				@click="handleBackdropClick"
				@cancel="closeModal"
			>
				<div
					ref="modalRef"
					class="relative flex max-h-[90vh] w-full flex-col rounded-lg bg-white shadow-2xl dark:bg-gray-800 dark:text-white"
				>
					<!-- Header -->
					<header class="flex items-center justify-between border-b p-4">
						<h2
							v-if="title"
							id="modal-title"
							class="text-xl font-semibold"
						>
							{{ title }}
						</h2>
						<button
							type="button"
							class="rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:text-gray-100"
							aria-label="Закрыть модальное окно"
							@click="closeModal"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</header>

					<!-- Main Content -->
					<main
						id="modal-description"
						class="flex-grow overflow-y-auto p-4"
					>
						<slot />
					</main>

					<!-- Footer -->
					<footer
						v-if="$slots.footer"
						class="border-t p-4"
					>
						<slot name="footer" />
					</footer>
				</div>
			</dialog>
		</Teleport>
	</ClientOnly>
</template>
<style scoped>
dialog {
	animation: fadeIn 0.2s ease-out;
}

dialog::backdrop {
	background-color: rgba(0, 0, 0, 0.5);
	animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
