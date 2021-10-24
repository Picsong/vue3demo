import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/layout/index.vue"

const Login = () => import("@/views/login/index.vue")
const Home = () => import("@/views/home/index.vue")
const LargeScreen = () => import("@/views/large-screen/index.vue")
const DyForm = () => import("@/views/form/index.vue")

const routes: RouteRecordRaw[] = [
  { path: "/login", component: Login },
  { path: "/large-screen", component: LargeScreen },
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      { path: "/form", component: DyForm },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
