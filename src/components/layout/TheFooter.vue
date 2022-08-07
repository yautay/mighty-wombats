<template>
<footer>
  <p>FOOTER HERE</p>
</footer>
</template>

<script>
export default {
  name: "TheFooter"
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