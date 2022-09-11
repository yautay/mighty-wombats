<template>
  <div>
    <h2 class="hidden">Squadron</h2>
    <div class="squadron_info">
      <SquadronCounters></SquadronCounters>
      <div class="title tinos">
        <div class="wombat_line"></div>
        <div class="wrapper_title"><p>VMFA-117 Mighty Wombats</p></div>
      </div>
      <div class="description">
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
</template>

<script>
import SquadronCounters from "@/pages/home/components/SquadronCounters";

export default {
  name: "SectionSquardon",
  data() {
    return {
      trainings_number: 136

    };
  },
  components: {SquadronCounters}

};
</script>

<style scoped lang="scss">

.squadron_info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 0 2%;

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
      color: $wombat_white;
    }
  }

  .description {
    font-size: 1.15rem;
    padding: 1rem 0;
    color: $wombat_white;
    padding-right: 30%;
  }

}
</style>