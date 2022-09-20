import { createRouter, createWebHistory } from "vue-router";

import PageHome from "@/pages/home/PageHome";
import GalleryList from "@/pages/gallery/GalleryList";
import GalleryDetail from "@/pages/gallery/GalleryDetail";
import LogList from "@/pages/mission_log/LogList";
import LogDetail from "@/pages/mission_log/LogDetail";
import GreenieBoard from "@/pages/greenie/GreenieBoard";
import ContactUs from "@/pages/contact/ContactUs";
import SquadronPage from "@/pages/login/LoginPage";
import BossZone from "@/pages/login/BossZone";
import RegisterFlight from "@/pages/login/RegisterFlight";
import NotFound from "@/pages/error/NotFound";

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/news" },
      { path: "/news", component: PageHome },
      { path: "/news/:id", component: PageHome },
      { path: "/greenie", component: GreenieBoard },
      { path: "/log", component: LogList },
      { path: "/log/:id", component: LogDetail },
      { path: "/gallery", component: GalleryList },
      { path: "/gallery/:id", component: GalleryDetail },
      { path: "/contact", component: ContactUs },
      {
        path: "/login", component: SquadronPage, children: [
          { path: "/flights", component: RegisterFlight },
          { path: "/commander", component: BossZone }]
      },
      { path: "/:notFound(.*)", component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
    }
  }
);

export default router;
