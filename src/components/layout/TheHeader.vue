<template>
  <header>
    <div class="logo">
      <WombatLogo></WombatLogo>
    </div>
    <nav>
      <h1>
        <router-link to="/">VMFA 117 MIGHTY WOMBATS</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <router-link to="/about">O nas/Rooster</router-link>
        </li>
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
  components: {WombatLogo}

};
</script>

<style scoped lang="scss">
@import "src/scss/layout.scss";
@import "src/scss/colours.scss";

header {
  width: 100vw;
  height: $header_height;
  position: fixed;
  top: 0;
  background-color: $overshadow;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  a {
    text-decoration: none;
    color: $font_white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid $font_white;
    }
  }

  h1 {
    margin: 0;

    a {
      color: $font_white;
      margin: 0;

      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
  }

  .logo {
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