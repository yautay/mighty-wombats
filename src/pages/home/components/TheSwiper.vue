<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    :pagination="pagination"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(bulletins, index) in lastFiveBulletins"
                 :key="bulletins.bulletin_id"
                 :virtualIndex="index">
      <SimpleNews
        :date=bulletins.bulletin_date
        :title=bulletins.bulletin_title
        :description=bulletins.bulletin_text
        :link=bulletins.bulletin_id
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
  components: {
    Swiper,
    SwiperSlide,
    SimpleNews
  },
  created() {
     this.fetchBulletins();
  },
  computed: {
    lastFiveBulletins() {
      return this.$store.getters["bulletins/getLastFiveBulletins"];
    }
  },
  methods: {
    async fetchBulletins() {
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      this.$store.dispatch("homeLoading/isLoading");
      await this.$store.dispatch("bulletins/fetchBulletins");
      sleep(2000).then(() => {
      this.$store.dispatch("homeLoading/isNotLoading")});
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true
      },
      modules: [Pagination]
    };
  }
};

</script>
<style lang="scss">
.spinner {
  position: sticky;
}

.swiper {
  height: 100%;
}

.swiper-slide {
  display: flex;
  flex-wrap: nowrap;
  background: none;
}

.swiper-pagination {
  margin-bottom: $footer_height_desktop + 170px;
  @media screen and (max-width: $desktop) {
    margin-bottom: $footer_height_mobile + 170px;
  }
}

.swiper-pagination-bullet {
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
