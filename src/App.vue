<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">MyTodoList</router-link>
    <router-link to="/weather">GetWeather</router-link>
    <router-link to="/login">Login</router-link>
  </div>
  <router-view />
</template>

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
