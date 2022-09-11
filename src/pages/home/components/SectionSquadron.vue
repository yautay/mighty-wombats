<template>
  <div>
    <h2 class="hidden">Squadron</h2>
    <div class="squadron_info">
      <div class="content_block">
        <div class="content_element title tinos">
          <div class="wombat_line"></div>
          <div class="wrapper_title"><p>VMFA-117 Mighty Wombats</p></div>
        </div>
        <div class="content_element description">
          <p>Profil Misji: Szeroko pojęte wspierania działań desantowych USMC. Latamy na najnowszej Open Beta.</p>
          <br>
          <p>Chodzi nam o dobrą zabawę w przyjemnej atmosferze. Jednocześnie, to jest hobby. Ludzie wkładają w eskadrę
            wysiłek i sporo cennego czasu. Także ważne jest utrzymywanie przyzwoitego poziomu i, w miarę indywidualnych
            możliwości, ciągłe doskonalenie – tak żeby inni mieli z nas pożytek.</p>
          <br>
          <p>Docelowo chcemy oferować kadetom kompleksowe szkolenie zahaczające o możliwie wszystkie aspekty samolotu
            F/A-18C. Oczywiście na tę chwilę, program jest dopiero rozwijany.</p>
        </div>
      </div>
    </div>
    <UnderConstruction></UnderConstruction>
  </div>
</template>

<script>
import UnderConstruction from "@/pages/home/components/UnderConstruction";

export default {
  name: "SectionSquardon",
  data() {
    return {
    };
  },
  components: { UnderConstruction }

};
</script>

<style scoped lang="scss">


.squadron_info {
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: $phone) {
    width: 100%;
  }

  .content_block {
    width: 80%;
    padding-left: 5%;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    @media screen and (max-width: $tablet) {
      padding-right: 5%;
      width: 100%;
    }

    .content_element {
      color: $wombat_white;
    }

    .title {
      .wombat_line {
        height: 5px;
        width: 150px;
        background-color: $wombat_yellow;
      }

      .wrapper_title {
        height: auto;
        font-size: 3rem;
      }
    }

    .description {
      font-size: 1.15rem;
      padding: 1rem 0;
    }

  }


}
</style>