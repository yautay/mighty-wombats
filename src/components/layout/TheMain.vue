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

<style lang="scss">

main {
  background-color: black;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 2rem;
  text-decoration-thickness: 5px;
  text-decoration-color: $wombat_yellow;

}
</style>