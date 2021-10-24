<template>
  <div class="siderbar-wrap">
    <el-menu router class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <template #title>页面1</template>
      </el-menu-item>
      <el-menu-item index="/large-screen">
        <i class="el-icon-document"></i>
        <template #title>页面2</template>
      </el-menu-item>
      <el-menu-item index="/form">
        <i class="el-icon-setting"></i>
        <template #title>页面3</template>
      </el-menu-item>
    </el-menu>

    <div class="collapse">
      <ElIcon :size="20">
        <component :is="isCollapse ? Expand : Fold" @click="isCollapse = !isCollapse" />
      </ElIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { ElIcon } from "element-plus"
import { Expand, Fold } from "@element-plus/icons"
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.siderbar-wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .collapse {
    border-top: 1px solid #f0f2f5;
    border-right: 1px solid #f0f2f5;
    padding: 10px 20px 24px;
    height: 20px;
    line-height: 20px;
    background-color: #ffffff;
  }
}
.el-menu-vertical-demo {
  height: 100%;
  max-height: calc(100% - 55px);
  overflow-y: auto;
  border-right: 1px solid #f0f2f5;
  &::-webkit-scrollbar {
    display: none;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
