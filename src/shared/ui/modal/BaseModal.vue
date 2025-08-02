<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';

interface IProps {
	modelValue?: boolean;
	title?: string;
	description?: string;
}

interface Emits {
	(e: 'update:modelValue', value: boolean): void;
}

const props = withDefaults(defineProps<IProps>(), {
	modelValue: false,
	title: undefined,
	description: undefined
});

const emit = defineEmits<Emits>();

const dialogRef = ref<HTMLDialogElement | null>(null);
const modalRef = ref<HTMLElement | null>(null);

const closeModal = () => {
	if (dialogRef.value) {
		dialogRef.value.close();
	}
	emit('update:modelValue', false);
};

const handleBackdropClick = (e: MouseEvent) => {
	if (e.target === dialogRef.value) {
		closeModal();
	}
};

// Управление открытием/закрытием диалога
watch(
	() => props.modelValue,
	async (isOpen) => {
		await nextTick();

		if (isOpen && dialogRef.value) {
			dialogRef.value.showModal();
			// Фокус на первом фокусируемом элементе
			focusFirstElement();
		} else if (!isOpen && dialogRef.value) {
			dialogRef.value.close();
		}
	}
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

// Закрытие по Escape
watch(
	() => props.modelValue,
	(isOpen) => {
    
		if (isOpen) {
			const handleKeydown = (e: KeyboardEvent) => {
				if (e.key === 'Escape') {
					closeModal();
				}
			};

			document.addEventListener('keydown', handleKeydown);

			return () => {
				document.removeEventListener('keydown', handleKeydown);
			};
		}
	},
	{ immediate: true }
);
</script>
<template>
	<Teleport to="body">
		<dialog
			ref="dialogRef"
			
			class="p-0 border-0 bg-transparent backdrop:bg-black/50 w-full max-w-md mx-auto my-8"
			@click="handleBackdropClick"
			@cancel="closeModal"
		>
			<div
				ref="modalRef"
				class="relative flex max-h-[90vh] w-full flex-col rounded-lg bg-white shadow-xl"
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
						class="rounded-full p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
					<slot/>
				</main>

				<!-- Footer -->
				<footer
					v-if="$slots.footer"
					class="border-t p-4"
				>
					<slot name="footer"/>
				</footer>
			</div>
		</dialog>
	</Teleport>
</template>
<style scoped>
dialog {
	/* Стили для модального окна */
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
