import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Weather from "../views/Weather.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DemoLogin from "../components/DemoLogin.vue";
import Dashboard from "../components/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/demo",
    name: "DemoLogin",
    component: DemoLogin,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "ToDo",
    // route level code-splitting
    // this generates a separate chunk (ToDo.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ToDo" */ "../views/ToDo.vue"),
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
