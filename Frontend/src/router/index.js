import { createRouter, createWebHistory } from "vue-router";
import Settings from "../views/Settings.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/Register",
      component: Register,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ],
});

export default router;
