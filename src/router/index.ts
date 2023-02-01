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
    path: "/repair-pages",
    name: "RepairPages",
    component: () => import("../components/repair-pages/RepairPages.vue"),
  },
  {
    path: "/web-pages",
    name: "WebPages",
    component: () => import("../components/web-pages/WebPages.vue"),
  },
  {
    path: "/web-shops",
    name: "WebShops",
    component: () => import("../components/web-shops/WebShops.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../components/services/Services.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/contact/Contact.vue"),
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
