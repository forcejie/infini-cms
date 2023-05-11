import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/res",
      component: () => import("../views/res.vue")
    },
    {
      path: "/login",
      component: () => import("../views/login/Login.vue")
    },
    {
      path: "/main",
      component: () => import("../views/main/main.vue")
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/not-found/not-found.vue")
    }
  ]
})

export default router
