export const isElementVisibleInContainer = (
  el: HTMLElement,
  container: HTMLElement,
  threshold = 0.5
): boolean => {
  const containerRect = container.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  const visibleWidth =
    Math.min(containerRect.right, elRect.right) -
    Math.max(containerRect.left, elRect.left);

  return visibleWidth >= elRect.width * threshold;
};

export const initSlideMarkers = (container: HTMLElement | null): void => {
  if (!container) return;

  const items = Array.from(container.children) as HTMLElement[];

  items.forEach((el, idx) => {
    el.dataset.slideIndex = String(idx);

    if (idx === 0) {
      el.dataset.slideFirst = 'true';
    }

    if (idx === items.length - 1) {
      el.dataset.slideLast = 'true';
    }
  });
};

export const createDebounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay = 150
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
};