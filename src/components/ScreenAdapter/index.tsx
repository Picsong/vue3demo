import { ref, defineComponent, PropType, onMounted } from "vue"
import { useDebounce, useResize } from "@hooks/index"
import "./index.scss"

interface IDesignSize {
  designWidth: number
  designHeight: number
}

export default defineComponent({
  name: "ScreenAdapter",
  props: {
    designSize: {
      type: Object as PropType<IDesignSize>,
      default: () => ({
        designWidth: 1920,
        designHeight: 1080,
      }),
    },
  },
  setup(props, { slots, attrs, emit }) {
    const scale = ref<number>(1)

    const getScale = () => {
      const w = window.innerWidth / props.designSize?.designWidth
      const h = window.innerHeight / props.designSize?.designHeight
      return w < h ? w : h
    }

    const setScale = useDebounce(function () {
      scale.value = getScale()
    })

    useResize(setScale)

    onMounted(() => {
      setScale()
    })
    return () => {
      return (
        <div class='scale-wrap' style={{ transform: `scale(${scale.value})` }}>
          {slots.default?.()}
        </div>
      )
    }
  },
})
