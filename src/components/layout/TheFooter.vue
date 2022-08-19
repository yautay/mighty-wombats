<template>
  <footer>
    <p>Copyright © 2020-{{ year }} by Mighty Wombats. All Rights Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped lang="scss">

footer {
  width: 100vw;
  height: $footer_height;
  position: fixed;
  bottom: 0;
  font-size: 0.75rem;
  color: $wombat_white;
  background-color: $overshadow;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

p {
  color: $wombat_white;
  margin: 0;
}
</style>