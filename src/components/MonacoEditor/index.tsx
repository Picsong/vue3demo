import { defineComponent, ref, h, onMounted } from "vue"
import loader from "@monaco-editor/loader"
import "./index.less"

loader.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.28.0/min/vs" } })

export default defineComponent({
  name: "MonacoEditor",
  setup() {
    const editorRef = ref()
    const monaco = ref()
    onMounted(async () => {
      monaco.value = await loader.init()
      monaco.value.editor.create(editorRef.value, {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: "javascript",
      })
    })
    return () => {
      return <div ref={editorRef} class='monaco-editor'></div>
    }
  },
})
