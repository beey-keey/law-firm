import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/about/About.vue";
import Articles from "../views/articles/Articles.vue";
import Partners from "../views/partners/Partners.vue";
import Projects from "../views/projects/Projects.vue";
import Services from "../views/services/Services.vue";
import Team from "../views/team/Team.vue";
import Contact from "../views/contact/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/partners",
    name: "Partners",
    component: Partners,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Винаги скролирай най-горе
    return { top: 0 };
  },
});

export default router;
