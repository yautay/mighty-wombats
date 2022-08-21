<template>
<div class="bg"></div>
  <div class="content">
    <div class="announcement tinos">
    <p class="underline">Something went wrong...</p>
    <p>Marshal has just announced.</p>
    <h2 class="tinos">CASE 404</h2>
  </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped lang="scss">
.bg {
  position: fixed;
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
.content {
  position: absolute;
  height: 100vh;
  width: 50%;
  padding-top: $header_height;
  display: inline-block;
  flex-direction: column;

  .announcement {
    padding-top: 50vh;
    padding-left: 15vw;
    color: $wombat_white;
    p {
      font-size: 1.75rem;
      margin: 0;
      &.underline {
        padding-bottom: 3rem;

      }
    }
    h2 {
      font-size: 4rem;
    }
  }

}
</style>