<template>
  <div class="simple_news">
    <div class="content_block">
      <div class="content_element news_date tinos">{{ getDateFormated(date) }}</div>
      <div class="content_element news_title tinos">
        <h3>{{ title }}</h3></div>
      <div class="content_element news_description">
        <p>{{ description }}</p></div>
      <div class="content_element news_link tinos">
        <a v-bind:href="link">Czytaj więcej&nbsp;&nbsp;<font-awesome-icon class="caret-fa"
                                                                          icon="fa-solid fa-caret-right" />
        </a>

      </div>
    </div>
  </div>
</template>

<script>
import { monthToPolish } from "@/js/month-to-polish";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "SimpleNews",
  props: ["date", "title", "description", "link"],
  methods: {
    getDateFormated: function(date) {
      const dateParts = date.split("-");
      const day = dateParts[2];
      const month = monthToPolish(dateParts[1]);
      const year = dateParts[0];
      return day + " " + month + " " + year;
    }
  }
};

</script>

<style scoped lang="scss">

.simple_news {
  width: 80%;
  height: $slider_height;
  margin-bottom: $footer_height;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: $phone) {
    width: 100%;
  }

  .content_block {
    width: 50%;
    padding-left: 5%;
    padding-bottom: 20px;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-content: flex-end;
    align-items: flex-end;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }

    .content_element {
      align-self: flex-start;
      color: $wombat_white;
    }


    .news_date {
      height: 5rem;
      padding-bottom: 1rem;
      font-size: 1.5rem;
      text-decoration: underline;
      text-underline-offset: 2rem;
      text-decoration-thickness: 5px;
      text-decoration-color: $wombat_yellow;

    }

    .news_title {
      height: 2rem;
      font-size: 2rem;

      h3 {
        margin: 0;
        padding: 0;
        font-weight: inherit;
        font-style: inherit;
        font-size: inherit;
        font-family: inherit;
        display: block;
        vertical-align: center;
      }
    }

    .news_description {
      font-size: 1.15rem;
    }

    .news_link {
      font-size: 1.2rem;

      a {
        text-decoration: none;
        outline: none;
        color: $wombat_white;

        .caret-fa {
          color: $wombat_yellow;
          font-size: 1.5rem;

        }
      }

    }


  }


}
</style>