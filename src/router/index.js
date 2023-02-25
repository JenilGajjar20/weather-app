import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PreviewState from "../views/PreviewState.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/preview/:country/:state/:value",
      name: "previewState",
      component: PreviewState,
      meta: {
        title: "State Weather",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.state
      ? `${
          to.params.value === to.params.state ? "" : `${to.params.value + ", "}`
        } ${to.params.state}`
      : to.meta.title
  } | Weather App`;
  next();
});

export default router;
