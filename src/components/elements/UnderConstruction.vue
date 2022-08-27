<template>
<div class="under_construction">
</div>
</template>

<script>
export default {
  name: "UnderConstruction"
}
</script>

<style scoped>
.under_construction {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  /*background-color: white;*/
  background-image: url("https://wombats.s3.eu-central-1.amazonaws.com/under_construction.png");
  background-repeat:no-repeat;
  background-size:contain;

}
</style>