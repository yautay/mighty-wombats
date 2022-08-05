import { createRouter, createWebHistory } from "vue-router";

import NewsList from "@/pages/news/NewsList";
import NewsDetail from "@/pages/news/NewsDetail";
import GalleryList from "@/pages/gallery/GalleryList";
import GalleryDetail from "@/pages/gallery/GalleryDetail";
import LogList from "@/pages/logs/LogList";
import LogDetail from "@/pages/logs/LogDetail";
import RoosterList from "@/pages/rooster/RoosterList";
import GreenieBoard from "@/pages/greenie/GreenieBoard";
import AboutUs from "@/pages/about/AboutUs";
import ContactUs from "@/pages/contact/ContactUs";
import SquadronPage from "@/pages/squadron/SquadronPage";
import BossZone from "@/pages/squadron/BossZone";
import RegisterFlight from "@/pages/squadron/RegisterFlight";
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
