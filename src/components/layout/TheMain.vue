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
  background-color: black;
}
</style>