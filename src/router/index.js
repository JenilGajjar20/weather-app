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
        title: "Preview Weather",
      },
    },
  ],
});

export default router;
