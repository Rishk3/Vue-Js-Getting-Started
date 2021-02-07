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

<script>
import { ref } from "vue";
import { auth } from "../utilities/firebaseConfig.ts";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";
export default {
  setup() {
    const store = useStore(key);
    const router = useRouter();
    const userName = ref("");
    const storeUser = store.getters.displayUser;

    //check the store
    if (storeUser) {
      userName.value = storeUser.user.email;
      console.log("store user", storeUser);
    } else {
      console.error("store user", storeUser);
      // router.push("/login");
    }

    const logOut = () => {
      console.log("sining Out");
      auth
        .signOut()
        .then(() => {
          userName.value = "";
          localStorage.removeItem("user");
          router.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return { userName, logOut };
  },
};
</script>
