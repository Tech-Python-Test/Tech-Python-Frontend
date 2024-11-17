import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeVi.vue";

const routes = [
  { path: "/", component: Home, name: "HomeVi" },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/RegisterCo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
