<template>
  <ElForm v-bind="jsonSchema.formConfig">
    <ElRow v-bind="jsonSchema.rowConfig">
      <!--   渲染表单项   -->
      <template v-for="item in jsonSchema.columns" :key="item.dataIndex">
        <ElCol v-bind="item.colConfig">
          <ElFormItem v-bind="item.formItemConfig">
            <component :is="item.valueType" v-model="jsonSchema.formConfig.model[item.dataIndex]" v-bind="item">
              <!--  渲染插槽内容  -->
              <template v-for="slot in item.slots" :key="slot.name" #[slot.name]="slotData">
                <component :is="slot.content" v-bind="slotData"></component>
              </template>
            </component>
          </ElFormItem>
        </ElCol>
      </template>
    </ElRow>
  </ElForm>
</template>

<script lang="ts">
import { defineComponent, DefineComponent, PropType } from "vue"
import { ElForm, ElFormItem, ElRow, ElCol, ElInput, ElSelectV2, ElInputNumber } from "element-plus"

interface ISlot {
  name: string
  content: DefineComponent
}
export interface IJsonSchema {
  formConfig?: InstanceType<typeof ElForm>["$props"]
  formItemConfig?: InstanceType<typeof ElFormItem>["$props"]
  rowConfig?: InstanceType<typeof ElRow>["$props"]
  colConfig?: InstanceType<typeof ElCol>["$props"]
  dataIndex: string
  valueType: string
  options?: unknown
  slots?: ISlot[]
  columns?: IJsonSchema[]
}
export default defineComponent({
  name: "SchemaForm",
  components: { ElForm, ElFormItem, ElRow, ElCol, ElInput, ElSelectV2, ElInputNumber },
  props: {
    jsonSchema: {
      type: Object as PropType<IJsonSchema>,
      default: () => ({
        formConfig: {},
        formItemConfig: {},
        rowConfig: {},
        colConfig: {},
        slots: [],
        columns: [],
      }),
    },
  },
})
</script>
