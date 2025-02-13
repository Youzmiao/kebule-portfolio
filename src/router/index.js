import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Services from "../components/Services.vue";
import Resume from "../components/Resume.vue";
import Work from "../components/Work.vue";
import Contact from "../components/Contact.vue";
import Experience from "../components/resume/Experience.vue";
import Education from "../components/resume/Education.vue";
import Skills from "../components/resume/Skills.vue";
import About from "../components/resume/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      redirect: "/resume/experience",
      children: [
        {
          path: "experience",
          component: Experience,
        },
        {
          path: "education",
          component: Education,
        },
        {
          path: "skills",
          component: Skills,
        },
        {
          path: "about",
          component: About,
        },
      ],
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
