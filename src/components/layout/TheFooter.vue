<template>
  <footer>
    <p>FOOTER HERE</p>
    <h2>DB HOST :{{ db_host }}</h2>
    <h2>DB HOST :{{ port }}</h2>
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
@import "src/scss/layout";

footer {
  width: 100vw;
  height: $footer_height;
  position: fixed;
  bottom: 0;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  margin: 0;
}
</style>