import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PlayGameView from "@/views/PlayGameView.vue";

const routes = [
  { path: "/", name: "HomeView", component: HomeView },
  { path: "/play", name: "PlayGameView", component: PlayGameView, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
