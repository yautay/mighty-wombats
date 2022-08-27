<template>

    <li>
      <router-link to="/greenie" @click="$emit('deactivate_mobile_menu')"><p>Greenie Board</p></router-link>
    </li>
    <li>
      <router-link to="/log" @click="$emit('deactivate_mobile_menu')"><p>Mission Log</p></router-link>
    </li>
    <li>
      <router-link to="/gallery" @click="$emit('deactivate_mobile_menu')"><p>Galeria</p></router-link>
    </li>
    <li>
      <router-link to="/contact" @click="$emit('deactivate_mobile_menu')"><p>Rekrutacja</p></router-link>
    </li>
    <li>
      <router-link to="/login" @click="$emit('deactivate_mobile_menu')"><p>Zaloguj</p></router-link>
    </li>

</template>

<script>
export default {
  name: "TheRouting",
  emits: ['deactivate_mobile_menu']
}
</script>

<style scoped>

</style>