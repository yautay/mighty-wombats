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
  <div class="sliding_menu" :class="{active: isActive, inactive: !isActive}">
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
    <div>asdasdasdasdasd</div>
  </div>

</template>

<script>
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

  }
}
</script>

<style scoped lang="scss">
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
.sliding_menu {
  position: absolute;
  display: block;
  background-color: $wombat_yellow;
  top: $header_height_mobile + 10px;
  left: -$hamburger_menu_width - 10px;
  width: $hamburger_menu_width;
  height: $hamburger_menu_height;
  z-index: 0;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    z-index: -2;
    background-image: linear-gradient(45deg, #fffb00 25%, #000000 25%, #000000 50%, #fffb00 50%, #fffb00 75%, #000000 75%, #000000 100%);
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

    transform: translateX($hamburger_menu_width + 10px);
    transition: transform .3s;

  }
  &.inactive {
    transform: translateX(0);
    transition: transform .3s;

  }



}
</style>