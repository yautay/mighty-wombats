<template>
<body>
<router-view></router-view>
</body>
</template>

<script>
export default {
  name: "TheBody"
};
</script>

<style scoped lang="scss">
@import "src/scss/layout";

body {
  width: auto;
  padding-top: $header_height;
  padding-bottom: $footer_height;
  background-color: #d8c4f3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>