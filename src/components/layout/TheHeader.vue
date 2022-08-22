<template>
  <header>
    <h1 class="hidden">VMFA 117 Mighty Wombats</h1>
    <nav v-if="!hamburger_active">
      <ul>
        <li>
            <router-link class="squadron" to="/">
              <h2 class="hidden">Home</h2>
              <div class="home">
                <WombatLogo></WombatLogo>
                <div class="squadron_number">VMFA-117</div>
                <div class="squadron_name tinos">MIGHTY<br>WOMBATS</div>
              </div>
            </router-link>
        </li>
        <li>
          <router-link to="/greenie"><h2>Greenie Board</h2></router-link>
        </li>
        <li>
          <router-link to="/log"><h2>Mission Log</h2></router-link>
        </li>
        <li>
          <router-link to="/gallery"><h2>Galeria</h2></router-link>
        </li>
        <li>
          <router-link to="/contact"><h2>Kontakt/Rekrutacja</h2></router-link>
        </li>
        <li>
          <router-link to="/login"><h2>Zaloguj</h2></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import WombatLogo from "@/components/elements/WombatLogo";

export default {
  name: "TheHeader",
  components: { WombatLogo },
  data() {
    return {
      hamburger_active: window.innerWidth < 800
    }
  },
  mounted() {
    window.onresize = () => {
      this.hamburger_active = window.innerWidth < 800;
    }
  },
};
</script>

<style scoped lang="scss">
.home {
  WombatLogo{
    width: 200px;
    height: 200px;

  }
  display: flex;
  flex-direction: row;
}
header {
  //width: 100vw;
  height: $header_height;
  position: fixed;
  background-color: $overshadow;
  display: flex;
  //justify-content: center;
  //align-items: center;
  z-index: 100;

  //a {
  //  text-decoration: none;
  //  color: $wombat_white;
  //  display: inline-block;
  //  padding: 0.75rem 1.5rem;
  //  border: 1px solid transparent;
  //  font-size: 1.5rem;
  //  font-weight: bold;
  //
  //  &:active,
  //  &:hover,
  //  &.router-link-active {
  //    color: $wombat_yellow;
  //    text-shadow: $wombat_yellow 2px 2px 25px;
  //  }
  //
  //  &.squadron {
  //    text-align: left;
  //    line-height: 95%;
  //    padding: 0;
  //
  //    .squadron_number {
  //      font-size: .75rem;
  //    }
  //
  //    .squadron_name {
  //      font-size: 2.5rem;
  //    }
  //
  //    &:active,
  //    &:hover,
  //    &.router-link-active {
  //      color: $wombat_white;
  //      text-shadow: none;
  //    }
  //  }
  //}
  //
  //h1 {
  //
  //  margin: 0;
  //
  //  a {
  //    color: $wombat_white;
  //    margin: 0;
  //    font-size: 2rem;
  //
  //    &:hover,
  //    &:active,
  //    &.router-link-active {
  //      border-color: transparent;
  //    }
  //  }
  //}

  nav {
    width: 100vw;
    //margin: auto;
    display: flex;
    flex-direction: row;
    //justify-content: space-between;
    //align-items: center;
  }

  ul {
    list-style: none;
    //margin: 0;
    //padding: 0;
    display: flex;
    //justify-content: center;
    align-items: center;

  }
}


</style>