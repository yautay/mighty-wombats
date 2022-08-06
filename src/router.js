import { createRouter, createWebHistory } from "vue-router";

import NewsList from "@/pages/page_news/NewsList";
import NewsDetail from "@/pages/page_news/NewsDetail";
import GalleryList from "@/pages/page_gallery/GalleryList";
import GalleryDetail from "@/pages/page_gallery/GalleryDetail";
import LogList from "@/pages/page_logs/LogList";
import LogDetail from "@/pages/page_logs/LogDetail";
import RoosterList from "@/pages/page_rooster/RoosterList";
import GreenieBoard from "@/pages/page_greenie/GreenieBoard";
import AboutUs from "@/pages/page_about/AboutUs";
import ContactUs from "@/pages/page_contact/ContactUs";
import SquadronPage from "@/pages/page_squadron/SquadronPage";
import BossZone from "@/pages/page_squadron/BossZone";
import RegisterFlight from "@/pages/page_squadron/RegisterFlight";
import NotFound from "@/pages/NotFound";

const router = createRouter(
  {
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/news" },
      { path: "/news", component: NewsList },
      { path: "/news/:id", component: NewsDetail },
      { path: "/gallery", component: GalleryList },
      { path: "/gallery/:id", component: GalleryDetail },
      { path: "/log", component: LogList },
      { path: "/log/:id", component: LogDetail },
      { path: "/roster", component: RoosterList },
      { path: "/greenie", component: GreenieBoard },
      { path: "/about", component: AboutUs },
      { path: "/contact", component: ContactUs },
      {
        path: "/squadron", component: SquadronPage, children: [
          { path: "/flights", component: RegisterFlight },
          { path: "/commander", component: BossZone }]
      },
      { path: "/:notFound(.*)", component: NotFound }
    ]
  }
);

export default router;
