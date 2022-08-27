<template>
  <header>
    <h1 class="hidden">VMFA 117 Mighty Wombats</h1>
    <NavDesktop v-if="!hamburger_active"></NavDesktop>
    <NavMobile v-else></NavMobile>
  </header>
</template>

<script>
import WombatLogo from "@/components/elements/WombatLogo";
import NavDesktop from "@/components/layout/header/NavDesktop";
import NavMobile from "@/components/layout/header/NavMobile";

export default {
  name: "TheHeader",
  components: {WombatLogo, NavDesktop, NavMobile},
  data() {
    return {
      hamburger_active: window.innerWidth <= 889,
      header_height: "150px"
    }
  },
  mounted() {
    window.onresize = () => {
      this.hamburger_active = window.innerWidth <= 889;
    }
  },
};
</script>

<style scoped lang="scss">

header {
  height: $header_height_desktop;
  width: 100%;
  position: fixed;
  background-color: $overshadow;
  z-index: 100;

  @media screen and (max-width: $desktop) {
    height: $header_height_mobile;
  }

}
</style>