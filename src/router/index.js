import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Services from "../components/Services.vue";
import Resume from "../components/Resume.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/resume",
      name: "Resume",
      component: Resume,
    },
    {
      path: "/work",
      name: "Work",
      component: Work,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
});

export default router;
