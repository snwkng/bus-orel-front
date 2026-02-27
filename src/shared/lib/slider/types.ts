export interface IHorizontalSliderOptions {
  scrollRatio?: number
  visibilityThreshold?: number
  scrollTolerance?: number
  enableKeyboard?: boolean
  enableSwipe?: boolean
  onScrollEnd?: () => void
  onScrollStart?: () => void
}

export interface IHorizontalSliderReturn {
  isStart: Ref<boolean>
  isEnd: Ref<boolean>
  visibleIndices: Ref<number[]>
  isFocused: Ref<boolean>
  scroll: (direction: 'prev' | 'next') => void
  scrollToIndex: (index: number) => void
  updateState: () => void
  onScroll: () => void
}