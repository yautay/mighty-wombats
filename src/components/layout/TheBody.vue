<template>
<body>
<router-view></router-view>
</body>
</template>

<script>
export default {
  name: "TheBody"
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 84vh;
  background-color: #d8c4f3;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>