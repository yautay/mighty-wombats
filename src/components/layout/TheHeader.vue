<template>
  <header>
    <div id="wombat_logo">
      <WombatLogo></WombatLogo>
    </div>
    <nav>
      <h1>
        <router-link to="/">VFMA 117 "MIGHTY WOMBATS"</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/news">News</router-link>
        </li>
        <li>
          <router-link to="/greenie">Greenie Board</router-link>
        </li>
        <li>
          <router-link to="/rooster">Rooster</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/squadron">Squadron</router-link>
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
@import "src/scss/layout";

header {
  width: 100vw;
  height: $header_height;
  position: fixed;
  top: 0;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #f391e3;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    &:active,
    &:hover,
    &.router-link-active {
      border: 1px solid #f391e3;
    }
  }

  h1 {
    margin: 0;

    a {
      color: white;
      margin: 0;

      &:hover,
      &:active,
      &.router-link-active {
        border-color: transparent;
      }
    }
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

#wombat_logo {
  height: 100%;
}
</style>