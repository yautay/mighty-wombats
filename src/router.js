import { createRouter, createWebHistory } from "vue-router";

import PageNews from "@/pages/page_news/PageNews";
import NewsDetail from "@/pages/page_news/NewsDetail";
import GalleryList from "@/pages/page_gallery/GalleryList";
import GalleryDetail from "@/pages/page_gallery/GalleryDetail";
import LogList from "@/pages/page_logs/LogList";
import LogDetail from "@/pages/page_logs/LogDetail";
import GreenieBoard from "@/pages/page_greenie/GreenieBoard";
import AboutUs from "@/pages/page_about/AboutUs";
import ContactUs from "@/pages/page_contact/ContactUs";
import SquadronPage from "@/pages/page_login/LoginPage";
import BossZone from "@/pages/page_login/BossZone";
import RegisterFlight from "@/pages/page_login/RegisterFlight";
import NotFound from "@/pages/NotFound";

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/news" },
      { path: "/news", component: PageNews },
      { path: "/news/:id", component: NewsDetail },
      { path: "/rooster", component: AboutUs },
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
      { path: "/:notFound(.*)", component: NotFound }
    ]
  }
);

export default router;
