<template>
  <div class="login_comp ">
    <div class="login_comp_inner">
      <h1 class="text-center">Sign In</h1>
      <!-- social icons -->
      <SocialIcons />
      <p class="pb-1 text-center border-bottom-gray">
        Don't Have Account? Click <router-link to="/">Sign Up</router-link> to
        registration
      </p>

      <!-- input section -->
      <section class="mt-3 mb-2">
        <form>
          <div class="login_input">
            <div class="flex ">
              <div class="input_icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div class="input_box bkr ">
                <input type="email" required />
              </div>
            </div>
            <div class="flex mt-2">
              <div class="input_icon">
                <i class="fa fa-key" aria-hidden="true"></i>
              </div>
              <div class="input_box">
                <input type="password" required />
              </div>
            </div>
            <div class="m-1 mb-2 sign_check_box">
              <input type="checkbox" />
              <label for="vehicle1"> Always stay signed in</label>
            </div>
            <button class="login_btn" type="submit">Log In</button>
          </div>
        </form>
      </section>

      <div class="p-1 login_bottom">
        <p class="fsz-120">Forget Your Password?</p>
        <p class="fsz-80">
          no worries <router-link to="/">Click here</router-link> to reset your
          password.
        </p>
      </div>
      <p class="fsz-80 mt-2">
        <router-link to="/weather"
          >Didn't recieve confirmation instructions?</router-link
        >
      </p>
    </div>
  </div>
</template>

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
  border: none;
  font-size: 1.2em;
  color: white;
}
</style>

<script lang="ts">
import SocialIcons from "./SocialIcons.vue";

export default {
  components: {
    SocialIcons,
  },
};
</script>
