<template>
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

export default {
  name: "PageHome",
  components: { SectionHero, SectionSquadron, SectionAirwing, SectionRooster }
};
</script>

<style scoped lang="scss">
.parallax_main {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
  .parallax {
    transform-style: preserve-3d;
    height: 110vh;

    &::after{
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
  .bg-hero::after{
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/bckg.jpg");

  }
  .bg-airwing::after{
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/airwing.jpg");

  }
  .bg-squadron::after{
    background-image: $bckg_gradient_filter, url("https://wombats.s3.eu-central-1.amazonaws.com/meetup22.jpg");

  }
  .bg-rooster::after{
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