<template>
<div class="bg"></div>
  <section class="content">

  </section>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/404b.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    &::before {
      position: absolute;
      content:"";
      height:100%;
      width:100%;
      background: $bckg_gradient_filter;
    }


}
</style>