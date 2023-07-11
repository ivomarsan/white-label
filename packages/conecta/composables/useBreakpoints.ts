import { computed, onMounted, onUnmounted, ref } from "vue"
import type { ComputedRef } from "vue"

type Breakpoints = 'xs' | 'md' | 'lg';

export interface UseBreakpointsReturn {
  width: ComputedRef<number>;
  type: ComputedRef<Breakpoints>;
}

export function useBreakpoints(): UseBreakpointsReturn {
  const windowWidth = ref<number>(window.innerWidth)

  const type = computed<Breakpoints>(() => {
    if (windowWidth.value < 550) {
      return 'xs';
    }

    if (windowWidth.value >= 550 && windowWidth.value < 1200) {
      return 'md'
    }

    return 'lg'
  })

  const width = computed<number>(() => windowWidth.value)

  function onWidthChange() {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onWidthChange)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange)
  })

  return { width, type }
}