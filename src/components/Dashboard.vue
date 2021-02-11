<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Dashboard</div>

          <div class="flex">
            <div v-if="userName" class="alert alert-success" role="alert">
              <h1>Welcome {{ userName }}</h1>
              You are logged in!

              <button @click="logOut">LogOut</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { auth } from "../utilities/firebaseConfig";
import { Router, useRouter } from "vue-router";
import { useStore } from "vuex";
import { key, State } from "@/store";
export default {
  setup() {
    const store = useStore<State>(key);
    const router: Router = useRouter();
    const userName = ref<string>("");

    onMounted(() => {
      if (store.state.authUser != null) {
        userName.value = store.state.authUser.user.displayName;
      }
    });

    const logOut = () => {
      console.log("sining Out");
      auth
        .signOut()
        .then(() => {
          store.dispatch("logout");
          localStorage.removeItem("user");
          router.push("/");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return { userName, logOut };
  },
};
</script>
