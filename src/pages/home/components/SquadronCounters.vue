<template>
  <div class="squadron_counter">
    <div class="counter_element instruction">
      <div class=" counter_title"><p>Liczba szkoleń</p></div>
      <div class=" counter_value"><p class="tinos">{{ szkolenia }}</p></div>
    </div>
    <div class="counter_element training">
      <div class=" counter_title"><p>Liczba treningów</p></div>
      <div class=" counter_value"><p class="tinos">{{ treningi }}</p></div>
    </div>
    <div class="counter_element combat">
      <div class=" counter_title"><p>Liczba lotów bojowych</p></div>
      <div class=" counter_value"><p class="tinos">{{ bojowe }}</p></div>
    </div>
    <div class="counter_element sorties">
      <div class=" counter_title"><p>Liczba combat sorties</p></div>
      <div class=" counter_value"><p class="tinos">{{ wyloty }}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SquadronCounters",
  data() {
    return {
      szkolenia: 136,
      treningi: 188,
      bojowe: 122,
      wyloty: 373
    }
  }
};
</script>

<style scoped lang="scss">
.squadron_counter {
  width: 80%;
  height: 200px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.3) 20%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  align-self: center;

  .counter_element {
    height: inherit;
    width: 200px;

    .counter_title {
      width: auto;
      height: 30%;
      p {
        display: inline-block;
        line-height: 60px;
        width: 100%;
        text-align: center;
        vertical-align: center;
        color: $wombat_white;
        font-size: 1rem;
      }
    }

    .counter_value {
      height: 70%;
      p {
        display: inline-block;
        line-height: 140px;
        width: 100%;
        text-align: center;
        vertical-align: center;
        color: $wombat_yellow;
        font-size: 4rem;
        text-shadow: black 2px 2px 2px;
      }
    }
  }
}
</style>