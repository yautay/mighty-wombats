<template>
  <div class="main">
    <div class="background">
      <div class="hero-shadow"></div>
    </div>
    <div class="container_main">
      <div class="single_news">
        <div class="news_date tinos">
          <p>01 May 2022</p>
        </div>
        <div class="news_title tinos"><p>Tytuł News'a</p></div>
        <div class="news_abstract"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magnam maiores
          mollitia nostrum praesentium. Atque beatae esse laborum magni quae quisquam tempore. Consequatur cupiditate
          excepturi id magni odit quas veritatis voluptatem. Dolorum enim natus ratione! Ab, aliquam culpa deserunt
          distinctio doloremque minima, molestiae, neque perferendis provident quod sed vitae voluptates!</p></div>
        <div class="news_link tinos"><p>Czytaj Dalej...</p></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "PageNews"
};
</script>

<style scoped lang="scss">
@import "@/scss/layout.scss";
@import "@/scss/colours.scss";


.main {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #fff9f4;
  .background::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/bckg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 1;
  }
  .background .hero-shadow {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
}
.container_main {
  position: relative;
  height: 2000px;
  margin-left: 200px;
  margin-right: 800px;
  top: $header_height;
  z-index: 50;

  .single_news {
    background-color: rgba(239, 216, 87, 0.58);
    position: relative;
    margin-top: 40vh;
    .news_date{
      background-color: rgba(87, 107, 239, 0.58);
      position: relative;
      height: 2rem;
      font-size: 1rem;
      text-decoration: underline;
      text-underline-offset: .5rem;
      text-decoration-color: $wombat_yellow;
    }
    .news_title{
      background-color: rgba(87, 239, 122, 0.58);
      position: relative;
      height: 3rem;
      font-size: 2.5rem;
    }
    .news_abstract{
      background-color: rgba(87, 181, 239, 0.58);
      position: relative;
      font-size: 1rem;
    }
    .news_link{
      background-color: rgba(239, 128, 87, 0.58);
      position: relative;
      margin: 0;
      font-size: 1rem;
    }
  }
}
p{
  color: $wombat_white;

}
</style>