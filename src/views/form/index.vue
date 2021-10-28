<template>
  <div>
    配置表单
    <SchemaForm ref="schemaForm" :json-schema="jsonSchema" />
    <ElButton @click="schemaFormSubmit">提交</ElButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from "vue"
import { ElButton } from "element-plus"

import SchemaForm, { IJsonSchema } from "@/components/base/SchemaForm.vue"

export default defineComponent({
  name: "Form",
  components: { SchemaForm, ElButton },
  data() {
    const jsonSchema = {
      formConfig: {
        model: {
          title: "测试",
          number: 7,
          parent: "",
          status: "",
          time: "",
        },
        // inline: true,
        "label-width": "120px",
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
          slots: [{ name: "prepend", content: markRaw(defineComponent({ template: "https://" })) }],
        },
        {
          dataIndex: "number",
          valueType: "el-input-number",
          colConfig: { span: 12 },
          min: 1,
          max: 10,
          onChange: (v: number) => {
            console.log(v)
          },
          formItemConfig: {
            label: "计数器",
            prop: "number",
          },
        },
        {
          dataIndex: "parent",
          valueType: "el-select-v2",
          options: [],
          fetchOptions: {
            params: {
              name: "parent",
            },
          },
          colConfig: {
            span: 12,
          },
          onChange: (v: number) => {
            console.log(v, this)
          },
          formItemConfig: {
            label: "父标签",
            prop: "parent",
            rules: [
              {
                required: true,
                message: "此项为必选项",
              },
            ],
          },
        },
        {
          dataIndex: "status",
          valueType: "el-select-v2",
          options: [],
          fetchOptions: {
            params: {
              id: { ref: "parent" },
            },
          },
          colConfig: {
            span: 12,
          },
          clearable: true,
          formItemConfig: {
            label: "子标签--联动",
            prop: "status",
            rules: [
              {
                required: true,
                message: "此项为必选项",
              },
            ],
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
        {
          dataIndex: "time",
          valueType: "el-time-select",
          start: "08:30",
          step: "00:15",
          end: "18:30",
          placeholder: "Select time",
          colConfig: {
            span: 12,
          },
          formItemConfig: {
            label: "时间",
          },
        },
      ],
    }
    return {
      jsonSchema: jsonSchema as IJsonSchema,
      // 有子查询的表单项映射关系
      helpMap: new Map(),
      // 请求队列--建立好依赖关系的表单项。
      fetchList: [] as IJsonSchema[],
    }
  },
  created() {
    this.initJsonSchema()
  },
  methods: {
    // 初始化表单功能
    initJsonSchema() {
      const { columns = [] } = this.jsonSchema
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const thiz = this
      // 辅助对象--建立依赖关系，映射有 fetchOptions 的 dataIndex 与 item，只需一次遍历实现依赖构建与映射表建立
      columns.forEach(item => {
        if (item.fetchOptions) {
          item.callback = []
          item.update = async function () {
            const { params, ...rest } = this.fetchOptions
            if (params) {
              const data = { ...params }
              for (const key in data) {
                if (data[key]?.ref) {
                  data[key] = thiz.jsonSchema.formConfig.model[data[key].ref]
                }
              }
              // 获取数据
              const res = await thiz.getOptions(data)
              this.options = res
              thiz.jsonSchema.formConfig.model[this.dataIndex as string] = res?.[0]?.value
              // 执行回调
              this.callback.forEach(item => item.update())
            }
          }

          // 如果当前dataIndex不在helpMap中，就初始化它
          if (!thiz.helpMap.get(item.dataIndex)) {
            thiz.helpMap.set(item.dataIndex, item)
          }
          // 这一步是将当前项合并到helpMap中id对应的项中，因为有可能当前项在其子项被遍历的时候加入到了helpMap中
          thiz.helpMap.set(item.dataIndex, {
            ...item,
            callback: thiz.helpMap.get(item.dataIndex).callback,
          })
          const params = item.fetchOptions.params
          let hasRef = false
          if (params && typeof params === "object") {
            for (const [k, v] of Object.entries(params)) {
              if (v?.ref) {
                hasRef = true
                if (!thiz.helpMap.get(v.ref)) {
                  thiz.helpMap.set(v.ref, { callback: [] })
                }
                thiz.helpMap.get(v.ref).callback.push(item)
              }
            }
          }
          if (!hasRef) {
            this.fetchList.push(item)
          }
        }
      })

      console.log(this.helpMap, this.fetchList)
      // 发起请求
      this.fetchList.forEach(item => item.update())
    },
    // 表单提交
    schemaFormSubmit() {
      this.$refs?.schemaForm.$refs.formRef.validate((valid: boolean) => {
        console.log(valid)
      })
    },
    // 获取下拉选项
    async getOptions(data) {
      console.log(data)
      if (data.name === "parent") {
        return [
          { label: "爷爷", value: "01" },
          { label: "爸爸", value: "02" },
        ]
      }
      return [
        { label: "已解决", value: "01" },
        { label: "未解决", value: "02" },
      ]
    },
    // 发起请求
    // async getData() {},
  },
})
</script>

<style scoped></style>
