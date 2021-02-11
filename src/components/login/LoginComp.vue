<template>
  <div :class="mytheme" class="transition-all">
    <div v-if="isLogging" class="loader_outer">
      <div class="loader"></div>
    </div>
    <div class="login_comp">
      <div class="login_comp_inner">
        <h1 class="text-center">Sign In</h1>

        <!-- social icons -->
        <SocialIcons />
        <p class="pb-1 text-center border-bottom-gray">
          Don't Have Account? Click
          <router-link to="/register">Sign Up</router-link> to registration
        </p>

        <!-- input section -->
        <section class="mt-3 mb-2">
          <form action="#" @submit.prevent="logWithEmail">
            <div class="login_input">
              <div class="flex ">
                <div class="input_icon">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="input_box bkr ">
                  <input
                    id="email"
                    type="email"
                    v-bind:class="{ 'error-border': emailError != null }"
                    @click="
                      {
                        emailError = null;
                      }
                    "
                    name="email"
                    placeholder="e.g. someone@example.com"
                    value
                    required
                    autofocus
                    v-model="email"
                  />
                </div>
              </div>
              <div class="flex mt-2">
                <div class="input_icon">
                  <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="input_box">
                  <input
                    id="password"
                    type="password"
                    placeholder="type your password here.."
                    class="form-control"
                    name="password"
                    v-bind:class="{ 'error-border': passError != null }"
                    @click="
                      {
                        passError = null;
                      }
                    "
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div v-if="emailError" class="error-msg">
                {{ emailError }}
              </div>
              <div v-if="passError" class="error-msg">
                {{ passError }}
              </div>
              <div class="m-1 mb-2 sign_check_box">
                <input type="checkbox" v-model="alwaysLogin" />
                <label for="vehicle1"> Always stay signed in</label>
              </div>
              <button class="login_btn" type="submit">
                <div v-if="isLogging">⌛</div>
                <div v-else>Log In</div>
              </button>
            </div>
          </form>
        </section>

        <div class="p-1 login_bottom">
          <p class="fsz-120">Forget Your Password?</p>
          <p class="fsz-80">
            no worries <router-link to="/">Click here</router-link> to reset
            your password.
          </p>
        </div>
        <p class="fsz-80 mt-2">
          <router-link to="/"
            >Didn't recieve confirmation instructions?</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SocialIcons from "./SocialIcons.vue";
import { auth } from "../../utilities/firebaseConfig";
import { computed, onUnmounted, ref, watch } from "vue";
import { Router, useRouter } from "vue-router";
import { useStore } from "vuex";
import { key, State } from "@/store";

export default {
  components: {
    SocialIcons,
  },

  setup() {
    const store = useStore<State>(key);
    const email = ref<string>("");
    const alwaysLogin = ref<boolean>(false);
    const password = ref<string>("");
    const emailError = ref<string>(null);
    const passError = ref<string>(null);
    const isLogging = ref<boolean>(false); // for loading logiing Animations
    const router: Router = useRouter();

    const mytheme = ref<string>(store.getters.currentTheme);

    watch<string>(
      () => store.getters.currentTheme,
      (val) => {
        if (store.getters.currentTheme) {
          mytheme.value = store.getters.currentTheme;
          console.log("im state", mytheme.value);
        }
      }
    );

    const logWithEmail = () => {
      console.log("im checked", alwaysLogin.value);
      isLogging.value = true;
      auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
          console.log("successfull login", data);
          if (alwaysLogin.value) {
            //if  always signin true store user in localStorage
            localStorage.setItem("user", JSON.stringify(data));
          }
          store.dispatch("login", data);
          console.log("my user", store.state.authUser);
          if (store.state.authUser != null) {
            router.push("/dashboard");
          }
          isLogging.value = false;
        })
        .catch((err) => {
          if (err.message.includes("There is no user record")) {
            emailError.value = err.message;
            passError.value = null;
          } else {
            passError.value = err.message;
            emailError.value = null;
          }
          isLogging.value = false;
        });
    };
    return {
      mytheme,
      email,
      password,
      alwaysLogin,
      emailError,
      passError,
      logWithEmail,
      isLogging,
    };
  },
};
</script>
<style scoped lang="scss">
.dark {
  a {
    color: #d1d1d1;
    &.router-link-exact-active {
      color: #f3f3f3;
    }
  }
  .login_comp {
    display: grid;
    justify-content: center;
    background: #969696;
    color: #eeeeee;
    min-height: 90vh;
    .login_comp_inner {
      margin: 20px 0px;
      padding: 30px 20px;
      background-color: #5c5c5c;
    }
  }
  .input_box {
    min-height: 20px;
    flex: 1;
    display: flex;
    input {
      flex: 1;
      border: 1px solid $border-gray;
      border-left: none;
    }
    .error-border {
      border: 1px solid $danger;
    }
  }

  .input_icon {
    padding: 5px 10px;
    min-height: 20px;
    border: 1px solid $border-gray;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #4d4d4d;
  }
  .login_bottom {
    border: 1px solid $border-light-gray;
    border-right: none;
    border-left: none;
  }
  .login_btn {
    width: 100%;
    padding: 10px 0px;
    background-color: $primary;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: rgb(255, 255, 255);
  }
}

//dark end

//light
.light {
  .login_comp {
    display: grid;
    justify-content: center;
    background: #dddddd;
    min-height: 90vh;
    .login_comp_inner {
      margin: 20px 0px;

      padding: 30px 20px;
      background-color: #fff;
    }
  }
  .input_box {
    min-height: 20px;
    flex: 1;
    display: flex;
    input {
      padding: 10px;
      flex: 1;
      border: 1px solid $border-gray;
      border-left: none;
    }
    .error-border {
      border: 1px solid $danger;
    }
  }

  .input_icon {
    padding: 5px 10px;
    min-height: 20px;
    border: 1px solid $border-gray;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #dddddd;
  }
  .login_bottom {
    border: 1px solid $border-light-gray;
    border-right: none;
    border-left: none;
  }
  .login_btn {
    width: 100%;
    padding: 10px 0px;
    background-color: #75be33;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: white;
  }

  //media querrt
}

//default

.login_comp {
  display: grid;
  justify-content: center;
  background: #dddddd;
  min-height: 90vh;
  .login_comp_inner {
    margin: 20px 0px;
    width: 50vw;
    min-width: 500px;
    padding: 30px 20px;
    background-color: #fff;
  }
}
.input_box {
  min-height: 20px;
  flex: 1;
  display: flex;
  input {
    flex: 1;
    border: 1px solid $border-gray;
    border-left: none;
  }
  .error-border {
    border: 1px solid $danger;
  }
}

.input_icon {
  padding: 5px 10px;
  min-height: 20px;
  border: 1px solid $border-gray;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #dddddd;
}
.login_bottom {
  border: 1px solid $border-light-gray;
  border-right: none;
  border-left: none;
}
.login_btn {
  width: 100%;
  padding: 10px 0px;
  background-color: #75be33;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  color: white;
}
@media (max-width: 600px) {
  .login_comp {
    display: grid;
    justify-content: center;
    background: #dddddd;
    min-height: 90vh;
    .login_comp_inner {
      margin: 20px 0px;
      width: 80vw;
      min-width: 400px;
      padding: 30px 20px;
      background-color: #fff;
    }
  }
}
</style>
