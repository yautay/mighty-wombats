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
    <div class="hamburger_icon">
      <img src="https://wombats.s3.eu-central-1.amazonaws.com/hamburger.svg" alt="hamburger">
    </div></div>
  <!--  <nav>-->
  <!--    <ul>-->
  <!--      <li>-->
  <!--        <router-link to="/">-->
  <!--          <div class="home">-->
  <!--            <div class="home_img">-->
  <!--              <img src="https://wombats.s3.eu-central-1.amazonaws.com/wombat_logo.svg" alt="VMFA117 logo">-->
  <!--            </div>-->
  <!--            <div class="home_txt">-->
  <!--              <p class="squadron_number">VMFA-117</p>-->
  <!--              <div class="squadron_name tinos">MIGHTY<br>WOMBATS</div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </router-link>-->
  <!--      </li>-->
  <!--      <li>-->
  <!--        <router-link to="/login"><p>Zaloguj</p></router-link>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </nav>-->
</template>

<script>
export default {
  name: "NavMobile"
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
    margin-right: 5%;
    img {
      padding: 5% 0;
      height: $header_height_mobile;
    }
  }



}
</style>