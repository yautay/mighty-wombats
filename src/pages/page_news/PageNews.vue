<template>
  <section class="spa-fixed-background img-1">
    <SpaHero></SpaHero>
  </section>
  <section class="spa-fixed-background img-2">
    <SpaVmfa117></SpaVmfa117>
  </section>
  <section class="spa-fixed-background img-3">
    <SpaCvw22></SpaCvw22>
  </section>
  <section class="spa-fixed-background img-4">
    <slot name="rooster"></slot>
    <div class="spa-content">
      <h2>ROSTER</h2>
    </div>
  </section>
</template>

<script>
import SpaHero from "@/pages/page_news/SpaHero";
import SpaVmfa117 from "@/pages/page_news/SpaVmfa117";
import SpaCvw22 from "@/pages/page_news/SpaCvw22";
export default {
  name: "PageNewsSPA",
  components: {SpaHero, SpaVmfa117, SpaCvw22}
};
</script>

<style scoped lang="scss">
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";

h2{
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
  height: 100%;
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

.spa-fixed-background.img-4 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/join.jpg");
}
</style>