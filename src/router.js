import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import test from "./views/test.vue";
import demo from "./views/Demo.vue";
import task from "./views/Task.vue";
import temp from "./views/temp.vue";
import boot from "./views/boot.vue";
import BootstrapVue from "bootstrap-vue";
import movie from "./views/movie.vue";

Vue.use(Router);

Vue.use(BootstrapVue);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/test",
            name: "test",
            component: test
        },
        {
            path: "/demo",
            name: "demo",
            component: demo
        },
        {
            path: "/task",
            name: "task",
            component: task
        },
        {
            path: "/temp",
            name: "temp",
            component: temp
        },
        {
            path: "/boot",
            name: "boot",
            component: boot
        },
        {
            path: "/movie",
            name: "movie",
            component: movie
        }
    ]
});