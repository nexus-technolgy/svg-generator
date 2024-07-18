import { createRouter, createWebHistory } from "vue-router";
import SvgGenerator from "@/components/SvgGenerator.vue";
import Instructions from "@/components/Instructions.vue";

const routes = [
  { path: "/:dimensions/:bgColor/:fgColor/:text", props: true, component: SvgGenerator },
  { path: "/:dimensions/:bgColor/:fgColor", props: true, component: SvgGenerator },
  { path: "/:dimensions/:bgColor/", props: true, component: SvgGenerator },
  { path: "/:dimensions", props: true, component: SvgGenerator },
  { path: "/:catchAll(.*)*", component: Instructions }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

export default router;
