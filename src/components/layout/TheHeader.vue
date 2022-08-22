<template>
  <header>
    <h1 class="hidden">VMFA 117 Mighty Wombats</h1>
    <nav v-if="!hamburger_active">
      <ul>
        <li>
          <router-link class="squadron" to="/">
            <div class="home">
              <div class="home_img">
                <img src="https://wombats.s3.eu-central-1.amazonaws.com/wombat_logo.svg" alt="VMFA117 logo">
              </div>
              <div class="home_txt">
                <h2 class="squadron_number">VMFA-117</h2>
                <div class="squadron_name tinos">MIGHTY<br>WOMBATS</div>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/greenie"><h2 >Greenie Board</h2></router-link>
        </li>
        <li>
          <router-link to="/log"><h2 >Mission Log</h2></router-link>
        </li>
        <li>
          <router-link to="/gallery"><h2 >Galeria</h2></router-link>
        </li>
        <li>
          <router-link to="/contact"><h2 >Rekrutacja</h2></router-link>
        </li>
        <li>
          <router-link to="/login"><h2 >Zaloguj</h2></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import WombatLogo from "@/components/elements/WombatLogo";

export default {
  name: "TheHeader",
  components: {WombatLogo},
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

header {
  height: $header_height;
  width: 100%;
  position: fixed;
  background-color: $overshadow;
  z-index: 100;

  nav {
    width: inherit;
    height: inherit;

    ul {
      width: inherit;
      height: inherit;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      li {
        a {
          display: block;
          color: $wombat_white;
          font-size: 1.5rem;
          font-weight: bold;
          .home {
            .squadron_number{
              font-size: 1rem;
            }
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            .home_img {img {
              height: $header_height;
            }

            }
            .home_txt {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }


          }
        }
      }
    }
  }
}

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

</style>