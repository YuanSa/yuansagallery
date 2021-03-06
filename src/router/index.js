import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/reader",
        name: "Reader",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/Reader.vue"),
    },
    {
        path: "/lab",
        name: "Lab",
        component: () => import(/* webpackChunkName: "about" */ "../views/Lab.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
