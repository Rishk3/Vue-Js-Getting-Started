<template>
  <div v-if="!isloggedIn" class="m-1 flex justify-center login_social_icons">
    <div class="icon"><i class="fa fa-facebook"></i></div>
    <div class="icon"><i class="fa fa-twitter"></i></div>
    <div class="icon" v-on:click="googleSignIn">
      <i class="fa fa-google-plus"></i>
    </div>
    <div class="icon"><i class="fa fa-linkedin"></i></div>
  </div>
</template>
<script>
import firebase from "firebase";
import { auth } from "../../utilities/firebaseConfig.ts";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { key } from "@/store";

export default {
  setup() {
    const store = useStore(key); // cant assign state
    const router = useRouter();

    const counter = ref(0);
    const isloggedIn = ref(false);
    console.log("islogin", isloggedIn.value);
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = (newValue, oldValue) => {
      firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
          isloggedIn.value = true;
          store.dispatch("login", {
            authUser: result,
          });
          router.push("/dashboard");
        })
        .catch((error) => {
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
    background: #acacac;
    padding: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0px 10px;
    i {
      color: #fff;
      text-align: center;
      font-size: 1.4em;
    }
  }
}
</style>
