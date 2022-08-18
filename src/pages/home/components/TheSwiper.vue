<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide class="slide news-1">Slide 1</SwiperSlide>
    <SwiperSlide class="slide news-2">Slide 2</SwiperSlide>
    <SwiperSlide class="slide news-3">Slide 3</SwiperSlide>
    <SwiperSlide class="slide news-4">Slide 4</SwiperSlide>
  </Swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "TheSwiper",
  data() {
    return {
      mock_news: {
        1: {
          date: new Date('2022-03-11T03:24:00'),
          title: "TEST Q1 2022 Report",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://test.pl"
        },
        2: {
          date: new Date('2021-12-23T03:24:00'),
          title: "TEST Q2 Ciach Ciach",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://test.pl"
        },
        3: {
          date: new Date('2021-7-1T03:24:00'),
          title: "TEST Q3 WowWowWow",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://test.pl"
        },
        4: {
          date: new Date('2021-2-1T03:24:00'),
          title: "TEST Q4 123'asd",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
          link: "https://test.pl"
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
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
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";

.swiper-slide {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
}

.news-1 {
  background-color: rgba(199, 61, 61, 0.32);
}

.news-2 {
  background-color: rgba(185, 199, 61, 0.32);
}

.news-3 {
  background-color: rgba(61, 187, 199, 0.32);
}

.news-4 {
  background-color: rgba(169, 61, 199, 0.32);
}

</style>
