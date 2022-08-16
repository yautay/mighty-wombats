<template>
  <TheHeader></TheHeader>
  <TheMain></TheMain>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import TheMain from "@/components/layout/TheMain";

export default {
  name: "App",
  components: { TheFooter, TheHeader, TheMain }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,500;0,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tinos:wght@700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: "Barlow", sans-serif;
}

body {
  margin: 0;
  font-size: 10px;
}
.tinos {
  font-family: 'Tinos', sans-serif;
}
</style>