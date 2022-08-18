<template>
  <header>
    <router-link class="logo" to="/">
        <WombatLogo></WombatLogo>
    </router-link>
    <nav>
      <h1>
        <router-link class="squadron" to="/">
          <div class="squadron_number">VMFA-117</div>
          <div class="squadron_name tinos">MIGHTY<br>WOMBATS</div>
        </router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/greenie">Greenie Board</router-link>
        </li>
        <li>
          <router-link to="/log">Mission Log</router-link>
        </li>
        <li>
          <router-link to="/gallery">Galeria</router-link>
        </li>
        <li>
          <router-link to="/contact">Kontakt/Rekrutacja</router-link>
        </li>
        <li>
          <router-link to="/login">Zaloguj</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import WombatLogo from "@/components/elements/WombatLogo";

export default {
  name: "TheHeader",
  components: { WombatLogo }

};
</script>

<style scoped lang="scss">
@import "src/scss/layout.scss";
@import "src/scss/colours.scss";


header {
  width: 100vw;
  height: $header_height;
  position: fixed;
  background-color: $overshadow;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  a {
    text-decoration: none;
    color: $wombat_white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
    font-size: 1.5rem;
    font-weight: bold;

    &:active,
    &:hover,
    &.router-link-active {
      color: $wombat_yellow;
      text-shadow: $wombat_yellow 2px 2px 25px;
    }

    &.squadron {
      text-align: left;
      line-height: 95%;
      padding: 0;

      .squadron_number {
        font-size: .75rem;
      }

      .squadron_name {
        font-size: 2.5rem;
      }

      &:active,
      &:hover,
      &.router-link-active {
        color: $wombat_white;
        text-shadow: none;
      }
    }
  }

  h1 {

    margin: 0;

    a {
      color: $wombat_white;
      margin: 0;
      font-size: 2rem;

      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }

  .logo {
    margin-left: 20px;
    height: 100%;
  }

  nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 0.5rem;
    }
  }
}


</style>