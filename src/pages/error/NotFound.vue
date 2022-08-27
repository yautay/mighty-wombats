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
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: $bckg_gradient_filter;
    z-index: 1;
  }
}

.content {
  height: 100vh;
  padding-top: $header_height_desktop;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  @media screen and (max-width: $desktop) {
    padding-top: $header_height_mobile;
  }

  .announcement {
    margin: 10% 10%;
    color: $wombat_white;
    z-index: 99;

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
    @media screen and (max-width: $phone) {
      p {
        font-size: 1.5rem;

        &.underline {
          padding-bottom: 3rem;
          text-underline-offset: 1.5rem;

        }
      }

      h2 {
        font-size: 3rem;
        margin-bottom: 2rem;
      }
    }
  }

}
</style>