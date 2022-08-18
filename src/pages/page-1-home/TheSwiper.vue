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
    ...
  </Swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/css';

export default {
  name: "TheSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
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
