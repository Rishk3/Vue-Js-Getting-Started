<template>
  <div v-if="!isloggedIn" class="m-1 flex justify-center login_social_icons">
    <div class="icon"><i class="fa fa-facebook"></i></div>
    <div class="icon"><i class="fa fa-twitter"></i></div>
 
    <div class="icon"><i class="fa fa-linkedin"></i></div>
  </div>
</template>
<script lang="ts">
import firebase from "firebase";
import { auth } from "../../utilities/firebaseConfig";
import { ref, watch } from "vue";
import { useRouter, useRoute, Router } from "vue-router";
import { useStore } from "vuex";
import { key, State } from "@/store";

export default {
  setup() {
    const store = useStore<State>(key); // cant assign state
    const router: Router = useRouter();

    const counter = ref<number>(0);
    const isloggedIn = ref<boolean>(false);
    console.log("islogin", isloggedIn.value);
    const googleProvider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = (newValue, oldValue) => {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result: firebase.auth.UserCredential) => {
          isloggedIn.value = true;
          store.dispatch("login", result);
          router.push("/dashboard");
        })
        .catch((error: any) => {
          console.log(error);
        });
      counter.value++;
    };

    watch(counter, () => {
      console.log("The new counter value is: " + counter.value);
    });

    return { counter, googleSignIn, isloggedIn };
  },
};
</script>
<style scoped lang="scss">
.login_social_icons {
  .icon {
    background-color: #acacac;
    color: #fff;
    padding: 10px;
    width: 20px;
    font-size: 1.4em;
    height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0px 10px;
    i {
      text-align: center;
    }
    &:hover {
      background-color: #f0f0f0;
      color: rgb(23, 29, 112);
      font-size: 1.6rem;
    }
  }
}
</style>
