<template>
  <div>
    配置表单
    <SchemaForm ref="schemaForm" :json-schema="jsonSchema" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, markRaw } from "vue"

import SchemaForm, { IJsonSchema } from "@/components/base/SchemaForm.vue"

export default defineComponent({
  name: "Form",
  components: { SchemaForm },

  setup() {
    const schemaForm = ref()
    const jsonSchema = reactive<IJsonSchema>({
      formConfig: {
        model: {
          title: "测试",
          number: 7,
          status: "01",
        },
        // inline: true,
        "label-width": "100px",
        "label-position": "left",
      },
      rowConfig: {
        gutter: 30,
      },
      columns: [
        {
          dataIndex: "title",
          valueType: "el-input",
          colConfig: {
            span: 12,
          },
          formItemConfig: {
            label: "标题",
            prop: "title",
            rules: [
              {
                required: true,
                message: "此项为必填项",
              },
            ],
          },
          slots: [{ name: "prepend", content: markRaw(defineComponent({ template: "http://" })) }],
        },
        {
          dataIndex: "number",
          valueType: "el-input-number",
          colConfig: { span: 12 },
          min: 1,
          max: 10,
          onChange: v => {
            console.log(v)
          },
          formItemConfig: {
            label: "计数器",
            prop: "number",
          },
        },
        {
          dataIndex: "status",
          valueType: "el-select-v2",
          options: markRaw([
            { label: "已解决", value: "01" },
            { label: "未解决", value: "02" },
          ]),
          colConfig: {
            span: 12,
          },
          formItemConfig: {
            label: "状态",
          },
          slots: [
            {
              name: "default",
              content: markRaw(
                defineComponent({
                  template: `<div>{{$attrs.item.label}}</div>`,
                })
              ),
            },
          ],
        },
      ],
    })
    onMounted(() => {
      console.log(schemaForm.value)
    })
    return {
      jsonSchema,
      schemaForm,
    }
  },
})
</script>

<style scoped></style>
