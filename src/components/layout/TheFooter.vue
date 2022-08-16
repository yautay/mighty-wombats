<template>
  <footer>
    <p>FOOTER HERE</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      db_host: process.env.DB_HOST,
      port: process.env.DB_PORT
    };
  }
};
</script>

<style scoped lang="scss">
@import "src/scss/layout.scss";
@import "src/scss/colours.scss";

footer {
  width: 100vw;
  height: $footer_height;
  position: fixed;
  bottom: 0;
  background-color: $overshadow;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

p {
  color: $font_white;
  margin: 0;
}
</style>