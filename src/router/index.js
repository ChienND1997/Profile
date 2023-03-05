import Vue from "vue";
import VueRouter from "vue-router";
import viewLanding from "../layouts/viewLanding.vue";
Vue.use(VueRouter);
const DEFAULT_TITLE = 'Profile ChienND';
const routes = [
  {
    path: "/",
    name: "viewLanding",
    component: viewLanding
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});
export default router;
