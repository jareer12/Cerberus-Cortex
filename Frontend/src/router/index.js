import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Repl from "../views/Repl.vue";
import MySQL from "../views/MySQL.vue";
import MySQLRadar from "../views/MySQLRadar.vue";
import MySQLSandBox from "../views/MySQLSandBox.vue";

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
      path: "/repl",
      component: Repl,
    },
    {
      path: "/mysql/radar",
      component: MySQLRadar,
    },
    {
      path: "/mysql/sandbox",
      component: MySQLSandBox,
    },
  ],
});

export default router;
