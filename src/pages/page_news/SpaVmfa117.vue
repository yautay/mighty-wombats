<template>
  <div class="spa-content">
    <h2>VMFA117</h2>
  </div>
</template>

<script>
export default {
  name: "SpaVmfa117"
};
</script>

<style scoped lang="scss">
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";

.spa-content::after {
  /* phone image on small devices */
  content: '';
  display: block;
  width: 100%;
  padding: 20% 0;
  margin: 2em auto 0;
}

h2{
  display: inline-block;
  color: $wombat_white;
  font-size: 3rem;
}

</style>