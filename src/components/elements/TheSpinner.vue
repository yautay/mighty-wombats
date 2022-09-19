<template>
  <div class="spinner">
      <img src="@/assets/loader.gif" alt="This is an animated gif image, but it does not move"/>
  </div>
</template>

<style scoped lang="scss">
.spinner {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.79);
  img {
    height: 150px;
  }
}
</style>
