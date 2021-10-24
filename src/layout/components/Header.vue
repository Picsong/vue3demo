<template>
  <div class="header-wrap">
    <div class="logo-wrap">Logo</div>
    <div class="right-wrap">Admin</div>
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.header-wrap {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f2f5;
}
.right-wrap {
  margin-left: auto;
}
</style>
