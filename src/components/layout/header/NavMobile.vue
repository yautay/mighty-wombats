<template>
  <div class="mobile_container">
    <div class="squadron_logo">
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
    </div>
    <div class="hamburger_icon" :class="{active: isActive, inactive: !isActive}" @click="switch_menu_state">
      <img src="https://wombats.s3.eu-central-1.amazonaws.com/hamburger.svg" alt="hamburger">
    </div></div>
  <div class="slider-wrapper">
    <div class="sliding_menu" :class="{active: isActive, inactive: !isActive}">
      <ul>
      <TheRouting></TheRouting>
      </ul>
    </div>
  </div>


</template>

<script>
import TheRouting from "@/components/layout/header/TheRouting";
export default {
  name: "NavMobile",
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    switch_menu_state() {
      this.isActive = !this.isActive;
    }

  },
  components: {TheRouting}
}
</script>

<style lang="scss">
$hamburger_menu_width: 100vw;
$hamburger_menu_height: 220px;
$ribbon_height: 10px;

.mobile_container {
  height: $header_height_mobile;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .squadron_logo {
    margin-left: 5%;
    a {
      color: $wombat_white;
      text-decoration: none;
      .home {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: flex-start;


        .home_img {
          img {
            height: $header_height_mobile;
          }
        }
        .home_txt {
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .squadron_number {
            font-size: .5rem;
          }
        }

        .squadron_name {
          font-size: 1rem;
        }
      }

    }
  }
  .hamburger_icon {
    margin-right: 3%;
    cursor: pointer;
    transform-origin: 35% ;

    &.active {

      transform: rotate(180deg);
      transition: transform .3s;

    }
    &.inactive {
      transform: rotate(0deg);
      transition: transform .3s;

    }
    img {
      padding: 15% 0;
      height: $header_height_mobile;
    }
  }

}
.slider-wrapper {

  overflow: hidden;
  position: relative;
  height: $hamburger_menu_height;
  width: $hamburger_menu_width;
  .sliding_menu {
    position: relative;
    background-color: $wombat_yellow;
    top:  -$hamburger_menu_height - $ribbon_height;
    width: 100vw;
    height: $hamburger_menu_height;
    z-index: 0;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: -$ribbon_height;
      left: 0;
      right: 0;
      z-index: -2;
      background-image: linear-gradient(135deg, $wombat_yellow 25%, #000000 25%, #000000 50%, $wombat_yellow 50%, #fffb00 75%, #000000 75%, #000000 100%);
      background-size: 20px 20px;

    }
    &:after {
      width: inherit;
      height: inherit;
      top:0;
      content: "";
      display: block;
      position: absolute;
      z-index:-1;
      background-color: $wombat_yellow;

    }
    &.active {

      transform: translateY($hamburger_menu_height);
      transition: transform .3s;

    }
    &.inactive {
      transform: translateY(0);
      transition: transform .3s;

    }
    ul {
      height: inherit;
      margin-left: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;

      li {
        a {
          display: block;
          color: black;
          font-size: 2rem;
          font-weight: bold;
          text-decoration: none;
          @media screen and (max-width: $desktop) {
            font-size: 1rem;

          }

          //&:active,
          //&:hover,
          //&.router-link-active {
          //  color: $wombat_yellow;
          //  text-shadow: transparentize($wombat_yellow, .5) 5px 3px 50px;
          //}

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
}



</style>