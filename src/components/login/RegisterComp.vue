<template>
  <div class="login_comp ">
    <div class="login_comp_inner">
      <h1 class="text-center">Register</h1>
      <!-- social icons -->
      <SocialIcons />
      <p class="pb-1 text-center border-bottom-gray">
        Already Hava a account? Click
        <router-link to="/login">Login</router-link> to Login
      </p>

      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <!-- input section -->
      <section class="mt-3 mb-2">
        <form action="#" @submit.prevent="submit">
          <div class="login_input">
            <div class="flex mb-2">
              <div class="input_icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="input_box bkr ">
                <input
                  id="name"
                  type="name"
                  class="form-control"
                  name="name"
                  placeholder="Full Name goes here...."
                  value
                  required
                  autofocus
                  v-model="form.name"
                />
              </div>
            </div>
            <div class="flex ">
              <div class="input_icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="input_box bkr ">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="password goes here...."
                  value
                  required
                  autofocus
                  v-model="form.email"
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
                  class="form-control"
                  name="password"
                  placeholder="password goes here...."
                  required
                  v-model="form.password"
                />
              </div>
            </div>
            <div class="m-1 mb-2 sign_check_box">
              <input type="checkbox" />
              <label for="vehicle1"> Always stay signed in</label>
            </div>
            <button class="login_btn" type="submit">Register Now</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.name,
            })
            .then(() => {
              console.log("im  in register ");
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login_comp {
  display: grid;
  justify-content: center;
  background: #dddddd;
  min-height: 90vh;
  .login_comp_inner {
    margin: 20px 0px;
    min-width: 600px;
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
  cursor: pointer;
  border: none;
  font-size: 1.2em;
  color: white;
}
</style>
