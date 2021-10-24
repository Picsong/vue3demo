<template>
  <div class="layout-wrap">
    <Header />
    <section class="main-wrap">
      <Siderbar />
      <main class="main">
        <router-view></router-view>
      </main>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import Header from "./components/Header.vue"
import Siderbar from "./components/Siderbar.vue"

export default defineComponent({
  name: "Layout",
  components: { Header, Siderbar },
})
</script>

<style lang="scss" scoped>
.layout-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .main-wrap {
    display: flex;
    flex: 1;
    max-height: calc(100vh - 60px);
  }
  .main {
    flex: 1;
    margin: 24px;
    background-color: #ffffff;
  }
}
</style>
