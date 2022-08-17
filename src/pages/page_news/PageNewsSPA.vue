<template>
  <section class="spa-fixed-background img-1">
    <div class="spa-content">
    <h2>HERO</h2>
    </div>
  </section>
  <section class="spa-fixed-background img-2">
    <div class="spa-content">
      <h2>117</h2>
    </div>
  </section>
  <section class="spa-fixed-background img-3">
    <div class="spa-content">
      <h2>ROSTER</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNewsSPA"
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
.spa-fixed-background .spa-content::after {
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
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/meet_up22.jpg");
}

.spa-fixed-background.img-3 {
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/join.jpg");
}
</style>