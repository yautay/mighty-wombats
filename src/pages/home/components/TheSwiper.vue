<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    :pagination="pagination"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(bulletin, index) in lastSixBulletins"
                 :key="bulletin.bulletin_id"
                 :virtualIndex="index">
      <SimpleNews
        :date=bulletin.bulletin_date
        :title=bulletin.bulletin_title
        :description=bulletin.bulletin_text
        :link=bulletin.link
      ></SimpleNews>
    </SwiperSlide>
  </Swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import SimpleNews from "@/pages/home/components/SimpleNews";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

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
  computed: {
    lastSixBulletins() {
      return this.$store.getters['bulletins/lastSixBulletins'];
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
    };
  }
};

</script>
<style  lang="scss">
.swiper {
  height: 100%;
}
.swiper-slide {
  display: flex;
  flex-wrap: nowrap;
  background: none;
}
.swiper-pagination{
  margin-bottom: $footer_height_desktop + 170px;
  @media screen and (max-width: $desktop) {
    margin-bottom: $footer_height_mobile + 170px;
  }
}
.swiper-pagination-bullet
 {
  width: 10px;
  height: 10px;
  text-align: center;
  opacity: .6;
  background: #464646;
}

.swiper-pagination-bullet-active {
  border-radius: 40%;
  width: 15px;
  height: 10px;
  color: #fff;
  background: #ffffff;
}



</style>
