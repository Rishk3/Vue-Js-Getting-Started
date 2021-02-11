<template>
  <div id="nav">
    <router-link to="/">Login</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input
          @click="clickme"
          v-model="themeInput"
          type="checkbox"
          id="checkbox"
        />
        <div class="slider round"></div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";
export default {
  setup() {
    const store = useStore(key); //assiging store

    const themeInput = ref(false);
    const r = document.querySelector(":root");
    const clickme = () => {
      r.style.setProperty("--primary", "lightblue");

      if (themeInput.value) {
        store.dispatch("changeTheme", {
          theme: "light",
        });
      } else {
        store.dispatch("changeTheme", {
          theme: "dark",
        });
      }
    };
    return { themeInput, clickme };
  },
};
</script>

<style lang="scss">
#nav {
  padding: 20px 10px;
  border-bottom: 1px solid #adadad;

  display: flex;
  justify-content: space-around;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: $primary_heading;
    }
  }

  .theme-switch-wrapper {
    display: flex;
    align-items: center;

    em {
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }
  .theme-switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 50px;
  }

  .theme-switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 16px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    background-color: #3f3f3f;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>
