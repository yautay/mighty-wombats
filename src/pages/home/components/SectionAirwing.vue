<template>
  <div class="spa-content">
    <h2>CVW-22</h2>
    <UnderConstruction></UnderConstruction>
  </div>
</template>

<script>
import UnderConstruction from "@/pages/home/components/UnderConstruction";
export default {
  name: "SectionAirwing",
  components: {UnderConstruction}

};
</script>

<style scoped lang="scss">

h2{
  display: inline-block;
  color: $wombat_white;
  font-size: 3rem;
}
</style>