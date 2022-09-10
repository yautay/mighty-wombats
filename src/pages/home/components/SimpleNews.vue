<template>
  <div class="simple_news">
    <div class="content_block">
      <div class="content_element news_date tinos">{{ getDateFormated(date) }}</div>
      <div class="content_element news_title tinos">
        <h3>{{ title }}</h3></div>
      <div class="content_element news_description">
        <p>{{ description_cut }}</p></div>
      <div class="content_element news_link tinos">
        <a v-bind:href="this.bulletin_url + link">Czytaj więcej&nbsp;&nbsp;<font-awesome-icon class="caret-fa"
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
  data() {
    return {
      description_cut: this.description.split(/\s+/).slice(0, 30).join(" ") + " [...]",
      bulletin_url: window.location.origin + "/bulletins/?id="
    };
  },
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
  height: $slider_height_desktop;
  margin-bottom: $footer_height_desktop + 170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: $desktop) {
    height: $slider_height_mobile;
    margin-bottom: $footer_height_mobile + 170px;
  }
  @media screen and (max-width: $phone) {
    width: 100%;
  }

  .content_block {
    width: 50%;
    padding-left: 5%;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    @media screen and (max-width: $tablet) {
      width: 100%;
    }

    .content_element {
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

    }

    .news_description {
      font-size: 1.15rem;
      padding: 1rem 0;
    }

    .news_link {
      font-size: 1.2rem;

      a {
        text-decoration: none;
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