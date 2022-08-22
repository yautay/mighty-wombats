<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <div class="home">
            <div class="home_img">
              <img src="https://wombats.s3.eu-central-1.amazonaws.com/wombat_logo.svg" alt="VMFA117 logo">
            </div>
            <div class="home_txt">
              <p class="squadron_number">VMFA-117</p>
              <div class="squadron_name tinos">MIGHTY<br>WOMBATS</div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/greenie"><p>Greenie Board</p></router-link>
      </li>
      <li>
        <router-link to="/log"><p>Mission Log</p></router-link>
      </li>
      <li>
        <router-link to="/gallery"><p>Galeria</p></router-link>
      </li>
      <li>
        <router-link to="/contact"><p>Rekrutacja</p></router-link>
      </li>
      <li>
        <router-link to="/login"><p>Zaloguj</p></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavDesktop"
}
</script>

<style scoped lang="scss">
nav {
  width: inherit;
  height: inherit;

  ul {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      a {
        display: block;
        color: $wombat_white;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        @media screen and (max-width: $desktop) {
          font-size: 1rem;

        }

        &:active,
        &:hover,
        &.router-link-active {
          color: $wombat_yellow;
          text-shadow: transparentize($wombat_yellow, .5) 5px 3px 50px;
        }

        .home {
          width: 50vw;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: flex-start;

          &:hover,
          &:active {
            color: $wombat_white
          }

          .home_img {
            img {
              height: $header_height_desktop;
              @media screen and (max-width: $desktop) {
                height: $header_height_mobile;

              }
            }

          }

          .home_txt {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .squadron_number {
              font-size: 1rem;
              @media screen and (max-width: $desktop) {
                font-size: .5rem;

              }
            }

            .squadron_name {
              font-size: 2.5rem;
              @media screen and (max-width: $desktop) {
                font-size: 1rem;

              }
            }
          }

        }
      }
    }
  }
}
</style>