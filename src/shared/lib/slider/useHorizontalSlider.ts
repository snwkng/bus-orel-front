import {
  ref,
  onMounted,
  onBeforeUnmount,
  nextTick,
  type Ref,
} from 'vue';

import type {
  IHorizontalSliderOptions,
  IHorizontalSliderReturn
} from './types';

import {
  isElementVisibleInContainer,
  initSlideMarkers,
  createDebounce
} from './utils';

// Значения по умолчанию
const DEFAULT_OPTIONS: Required<IHorizontalSliderOptions> = {
  scrollRatio: 0.7,
  visibilityThreshold: 0.5,
  scrollTolerance: 10,
  enableKeyboard: true,
  enableSwipe: false,
  onScrollEnd: () => { },
  onScrollStart: () => { }
};

export const useHorizontalSlider = (
  sliderRef: Ref<HTMLElement | null>,
  prevBtnRef: Ref<HTMLElement | null>,
  nextBtnRef: Ref<HTMLElement | null>,
  options: IHorizontalSliderOptions = {}
): IHorizontalSliderReturn => {

  const opts = { ...DEFAULT_OPTIONS, ...options };
  const isStart = ref(true);
  const isEnd = ref(false);
  const isFocused = ref(false);

  const visibleIndices = ref<number[]>([]);

  const hasReachedEnd = ref(false);

  const updateState = (): void => {
    const container = sliderRef.value;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    isStart.value = scrollLeft <= opts.scrollTolerance;

    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - opts.scrollTolerance;
    isEnd.value = isAtEnd;

    if (isAtEnd && !hasReachedEnd.value) {
      hasReachedEnd.value = true;
      opts.onScrollEnd();
    }

    if (!isAtEnd) {
      hasReachedEnd.value = false;
    }

    if (isStart.value) {
      opts.onScrollStart();
    }

    visibleIndices.value = Array.from(container.children)
      .filter((el) =>
        isElementVisibleInContainer(
          el as HTMLElement,
          container,
          opts.visibilityThreshold
        )
      )
      .map((el) => Number((el as HTMLElement).dataset.slideIndex ?? -1))
      .filter((idx) => idx !== -1); // Убираем элементы без data-slide-index
  };

  const onScroll = (): void => {
    requestAnimationFrame(updateState);
  };

  const onResize = createDebounce(updateState, 150);

  const onKeyDown = (e: KeyboardEvent): void => {
    const prev = prevBtnRef.value;
    const next = nextBtnRef.value;
    if (!opts.enableKeyboard) return;

    if (e.key === 'ArrowRight' && !isEnd.value && next && document.activeElement === next) {
      e.preventDefault();
      scroll('next');
    }

    if (e.key === 'ArrowLeft' && !isStart.value && prev && document.activeElement === prev) {
      e.preventDefault();
      scroll('prev');
    }
  };

  const onFocusIn = (): void => {
    isFocused.value = true;
  };

  const onFocusOut = (): void => {
    isFocused.value = false;
  };

  const scroll = (direction: 'prev' | 'next'): void => {
    const container = sliderRef.value;
    if (!container) return;

    // Вычисляем шаг прокрутки
    // 0.7 = 70% видимой ширины (оставляем контекст предыдущего слайда)
    const step = container.clientWidth * opts.scrollRatio;

    container.scrollBy({
      left: direction === 'next' ? step : -step,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number): void => {
    const container = sliderRef.value;
    if (!container) return;

    // Ищем слайд по data-атрибуту
    const target = container.querySelector<HTMLElement>(
      `[data-slide-index="${index}"]`
    );

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',    // Выравнивание по началу (слева)
        block: 'nearest'    // Не скроллить по вертикали
      });
    }
  };

  onMounted(async () => {
    // Ждём, пока слот полностью отрендерится
    await nextTick();

    // Проставляем маркеры на слайды
    initSlideMarkers(sliderRef.value);

    // Вычисляем начальное состояние
    updateState();

    sliderRef.value?.addEventListener('scroll', onScroll, { passive: true });
    globalThis.addEventListener('resize', onResize);

    if (opts.enableKeyboard) {
      globalThis.addEventListener('keydown', onKeyDown);
      sliderRef.value?.addEventListener('focusin', onFocusIn);
      sliderRef.value?.addEventListener('focusout', onFocusOut);
    }
  });

  onBeforeUnmount(() => {
    sliderRef.value?.removeEventListener('scroll', onScroll);
    globalThis.removeEventListener('resize', onResize);
    globalThis.removeEventListener('keydown', onKeyDown);

    sliderRef.value?.removeEventListener('focusin', onFocusIn);
    sliderRef.value?.removeEventListener('focusout', onFocusOut);
  });

  return {
    isStart,
    isEnd,
    visibleIndices,
    isFocused,
    scroll,
    scrollToIndex,
    updateState,
    onScroll,
  };
};