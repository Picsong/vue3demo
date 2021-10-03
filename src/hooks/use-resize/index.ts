import { onMounted, onUnmounted } from 'vue'
import { useDebounce } from '@hooks/index'

export default function useResize (callback: Function, ms?: number) {
  const resize = useDebounce(callback, ms)

  onMounted(() => {
    window.addEventListener('resize', resize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })
}
