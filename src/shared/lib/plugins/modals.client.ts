// plugins/modals.client.ts
import { markRaw, shallowRef, type Component } from 'vue'
import type { ComponentProps } from 'vue-component-type-helpers'
import type { ModalItem } from '~/shared/lib/modal/types'

export default defineNuxtPlugin(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeModals = shallowRef<ModalItem<any>[]>([])

  function open<T extends Component, R = void>(
    component: T,
    props?: ComponentProps<T>
  ): Promise<R | null> {
    return new Promise((resolve) => {
      const id = Math.random().toString(36).slice(2)

      const newModal: ModalItem<T> = {
        id,
        component: markRaw(component),
        props: {
          ...props,
          onClose: () => {
            close(id)
            resolve(null)
          },
          onConfirm: (data: R) => {
            close(id)
            resolve(data)
          }
        }
      }

      activeModals.value = [...activeModals.value, newModal]
    })
  }

  function close(id?: string) {
    const targetId = id || activeModals.value.at(-1)?.id
    if (targetId) {
      activeModals.value = activeModals.value.filter(m => m.id !== targetId)
    }
  }

  return {
    provide: {
      modals: { activeModals, open, close }
    }
  }
})
