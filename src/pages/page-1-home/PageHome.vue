<template>
  <section class="spa-fixed-background img-1">
    <TheHero id="hero"></TheHero>
  </section>
  <section class="spa-fixed-background img-2">
    <TheSquadron id="squadron"></TheSquadron>
  </section>
  <section class="spa-fixed-background img-3">
    <TheAirwing id="airwing"></TheAirwing>
  </section>
  <section class="spa-fixed-background img-4">
    <TheRooster id="rooster"></TheRooster>
  </section>
</template>

<script>
import TheHero from "@/pages/page-1-home/TheHero";
import TheSquadron from "@/pages/page-1-home/TheSquadron";
import TheAirwing from "@/pages/page-1-home/TheAirwing";
import TheRooster from "@/pages/page-1-home/TheRooster";

export default {
  name: "PageHome",
  components: { TheHero, TheSquadron, TheAirwing, TheRooster }
};
</script>

<style scoped lang="scss">
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";

h2 {
  display: inline-block;
  color: $wombat_white;
  font-size: 3rem;
}

.spa-content::after {
  /* phone image on small devices */
  content: '';
  display: block;
  width: 100%;
  padding: 20% 0;
  margin: 2em auto 0;
}

.spa-fixed-background {
  height: auto;
  min-height: 100vh;
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