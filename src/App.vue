<template>
  <div id="nav">
    <router-link to="/">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <!-- <button @click="changeToDark">Dark Theme</button>
    <button @click="changeToLight">Light Theme</button> -->
  </div>

  <router-view />
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { key } from "./store";
export default {
  setup() {
    const store = useStore(key); //assiging store

    const changeToDark = () => {
      store.dispatch("changeTheme", {
        theme: "dark",
      });
      console.log("store data", store.state.theme);
    };
    const changeToLight = () => {
      store.dispatch("changeTheme", {
        theme: "light",
      });
      console.log("store data", store.state.theme);
    };

    return { changeToDark, changeToLight };
  },
};
</script>
<style lang="scss">
#app {
  font-family: poppins, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px 10px;
  background: rgb(116, 116, 116);
  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;
    color: #b8b8b8;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
