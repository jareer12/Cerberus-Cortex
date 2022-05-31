import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MySQL from "../views/MySQL.vue";
import MySQLRadar from "../views/MySQLRadar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/mysql",
      component: MySQL,
    },
    {
      path: "/mysql/radar",
      component: MySQLRadar,
    },
  ],
});

export default router;
