<template>
  <section class="spa-fixed-background img-1">
    <SectionHero class="body_container" id="hero"></SectionHero>
  </section>
  <section class="spa-fixed-background img-2">
    <SectionSquadron class="body_container" id="squadron"></SectionSquadron>
  </section>
  <section class="spa-fixed-background img-3">
    <SectionAirwing class="body_container" id="airwing"></SectionAirwing>
  </section>
  <section class="spa-fixed-background img-4">
    <SectionRooster class="body_container" id="rooster"></SectionRooster>
  </section>
</template>

<script>
import SectionHero from "@/pages/page-1-home/SectionHero";
import SectionSquadron from "@/pages/page-1-home/SectionSquadron";
import SectionAirwing from "@/pages/page-1-home/SectionAirwing";
import SectionRooster from "@/pages/page-1-home/SectionRooster";

export default {
  name: "PageHome",
  components: { SectionHero, SectionSquadron, SectionAirwing, SectionRooster }
};
</script>

<style scoped lang="scss">
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";


.body_container {
  padding-top: $header_height;
  height: inherit;
  min-height: inherit;
}

//.spa-content::after {
//  /* phone image on small devices */
//  content: '';
//  display: block;
//  width: 100%;
//  padding: 20% 0;
//  margin: 2em auto 0;
//}

.spa-fixed-background {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.spa-fixed-background.img-1 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/bckg.jpg");
}

.spa-fixed-background.img-2 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/meetup22.jpg");
}

.spa-fixed-background.img-3 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/airwing.jpg");
}

.spa-fixed-background.img-4 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/join.jpg");
}
</style>