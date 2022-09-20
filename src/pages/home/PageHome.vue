<template>
  <Loading v-model:active="isLoading"
           :can-cancel="false"
           :is-full-page="true"
           :lock-scroll="false"
           :enforce-focus="false"
           :background-color="'rgba(0,0,0,0.37)'"
           :opacity="1"
           :blur="'5px'">

    <template v-slot:default>
      <img src="@/assets/loader.gif" alt="This is an animated gif image, but it does not move"/>
    </template>
  </Loading>
  <div class="parallax_main">
    <SectionHero class="section_container parallax bg-hero" id="hero"></SectionHero>
    <SectionSquadron class="section_container parallax bg-squadron" id="squadron"></SectionSquadron>
    <SectionAirwing class="section_container parallax bg-airwing" id="airwing"></SectionAirwing>
    <SectionRooster class="section_container parallax bg-rooster" id="rooster"></SectionRooster>
  </div>
</template>

<script>
import SectionHero from "@/pages/home/components/SectionHero";
import SectionSquadron from "@/pages/home/components/SectionSquadron";
import SectionAirwing from "@/pages/home/components/SectionAirwing";
import SectionRooster from "@/pages/home/components/SectionRooster";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "PageHome",
  components: { SectionHero, SectionSquadron, SectionAirwing, SectionRooster, Loading },
  data() {
    return {

    };
  },
  computed: {
    isLoading() {
      return this.$store.getters["homeLoading/getHomeLoading"];
    }
  }
};
</script>

<style scoped lang="scss">
.parallax_main {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
  color: black;

  .parallax {
    transform-style: preserve-3d;
    height: 110vh;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      transform: translateZ(-.2px) scale(1.1);
      z-index: -1;
      background-size: cover;
      background-position: center;
    }
  }

  .bg-hero::after {
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/bckg.jpg");

  }

  .bg-airwing::after {
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/airwing.jpg");

  }

  .bg-squadron::after {
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/meetup22.jpg");

  }

  .bg-rooster::after {
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/join.jpg");

  }
}


.section_container {
  padding-top: $header_height_desktop;
  @media screen and (max-width: $desktop) {
    padding-top: $header_height_mobile;
  }
}

</style>