import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/Signup.vue"),
  },
  {
    path: "/work-desk",
    name: "WorkDesk",
    component: () => import("../components/WorkDesk.vue"),
  },
  {
    path: "/statistic",
    name: "Statistic",
    component: () => import("../components/Statistic.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
