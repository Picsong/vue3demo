<script lang="tsx">
import { ref, reactive, defineComponent } from "vue"

export default defineComponent({
  setup() {
    const readersNumber = ref(0)
    const book = reactive({ title: "Vue 3 Guide" })
    return () => (
      <div onClick={() => readersNumber.value++}>
        {book.title}:{readersNumber.value}
      </div>
    )
  },
})
</script>
