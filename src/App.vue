<template>
  <TheHeader></TheHeader>
  <TheBody>
  </TheBody>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import TheBody from "@/components/layout/TheBody";

export default {
  name: "App",
  components: { TheFooter, TheHeader, TheBody }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,900&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Barlow", sans-serif;
}

body {
  margin: 0;
}
</style>