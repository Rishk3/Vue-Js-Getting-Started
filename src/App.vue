<template>
  <Navbar />
  <router-view />
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { key } from "./store";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
#app {
  font-family: poppins, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
