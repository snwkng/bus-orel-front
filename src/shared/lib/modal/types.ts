import type { Component, Raw } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers';

export interface ModalItem<T extends Component = Component> {
  id: string
  component: Raw<T>
  props: {
    props?: ComponentProps<T> 
    onClose?: () => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onConfirm?: (data?: any) => void
  }
}