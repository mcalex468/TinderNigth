import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/profile",
    name: 'profile',
    component: () => import("../views/PerfilView.vue"), 
  },
  {
    path: "/list",
    name: 'list',
    component: () => import("../views/ListView.vue"), 
  },
  {
    path: "/form",
    name: 'form',
    component: () => import("../views/FormView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
