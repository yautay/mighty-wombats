<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(news, index) in mock_news"
                 :key="news.id">
      <SimpleNews
        :date=news.date
        :title=news.title
        :description=news.description
        :link=news.link
      ></SimpleNews>
    </SwiperSlide>
  </Swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SimpleNews from "@/pages/home/components/SimpleNews";
// Import Swiper styles
import "swiper/css";

export default {
  name: "TheSwiper",
  data() {
    return {
      mock_news: [
        {
          date: "2022-03-11",
          title: "TEST Q1 2022 Report",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://www.dotcom-tools.com/website-speed-test"
        },
        {
          date: "2021-12-23",
          title: "TEST Q2 Ciach Ciach",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://www.dotcom-tools.com/website-speed-test"
        },
        {
          date: "2021-07-01",
          title: "TEST Q3 WowWowWow",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://www.dotcom-tools.com/website-speed-test"
        },
        {
          date: "2021-02-01",
          title: "TEST Q4 123'asd",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://www.dotcom-tools.com/website-speed-test"
        }]

    };
  },
  components: {
    Swiper,
    SwiperSlide,
    SimpleNews
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange
    };
  }
};

</script>
<style scoped lang="scss">

.swiper-slide {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

</style>
