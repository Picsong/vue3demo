export default function useDebounce(callback: Function, ms = 500, immediate = false) {
  let timer: number | null = null
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      immediate = false
      callback.apply(this, args)
    }

    timer = setTimeout(() => {
      callback.apply(this, args)
      timer = null
    }, ms)
  }
}
