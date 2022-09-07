<template>
  <div>
    <h2>Rooster</h2>
    <UnderConstruction></UnderConstruction>
  </div>
</template>

<script>
import UnderConstruction from "@/pages/home/components/UnderConstruction";

export default {
  name: "SectionRooster",
  components: {UnderConstruction}

};
</script>

<style scoped lang="scss">

h2 {
  display: inline-block;
  color: $wombat_white;
  font-size: 3rem;
}
</style>