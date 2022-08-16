<template>
<main>
<router-view></router-view>
</main>
</template>

<script>
export default {
  name: "TheMain"
};
</script>

<style scoped lang="scss">
@import "src/scss/layout";

main {
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>