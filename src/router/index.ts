import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MainPage from "../components/MainPage.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../components/about-us/AboutUs.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/work-desk",
    name: "TestComponent",
    component: () => import("../components/TestComponent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
