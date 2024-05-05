<script setup lang="ts">
import { ref } from "vue"
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const rememberMeSelected = ref(false);
function signIn() {
  router.push('/dashboard')
}
</script>

<template>
  <div class="login__container">
    <div class="login__card">

      <div class="form__col">
        <div class="welcome-msg">Welcome to SQLite</div>
        <div class="signin__form-cotainer w-full">
          <div><img width="50px" src="@/assets/images/app-logo.png" alt="Sql query runner logo"></div>
          <div class="form__header">
            <div class="mb-5"> Sign in to your account</div>
          </div>
          <div class="form__fields--container">
            <div class="form__field">
              <label class="block mb-2" for="username">Username</label>
              <InputText id="username" class="w-full" />
            </div>
            <div class="form__field">
              <label class="block mb-2" for="signInPassword">Password</label>
              <InputText id="signInPassword" class="w-full" />
            </div>
            <div class="form__field flex justify-content-between">
              <span>
                <Checkbox class="mr-2" v-model="rememberMeSelected" :binary="true" id="rememberMe" />
                <label for="rememberMe">Remember me</label>
              </span>
              <span class="text-primary"><b>Forgot password ?</b></span>
            </div>
            <div>
              <Button @click="signIn()" class="block w-full" label="Sign in" />
            </div>
          </div>
          <Divider align="center" type="dotted">
            Or continue with
          </Divider>
          <div class="flex gap-2">
            <Button class="w-full flex justify-content-center" outlined severity="secondary">
              <img src="@/assets/images/login/google-logo.svg" width="15px" alt="" class="mr-2">
              Google</Button>
            <Button class="w-full flex justify-content-center" outlined severity="secondary">
              <img src="@/assets/images/login/google-logo.svg" width="15px" alt="" class="mr-2">
              Github</Button>
          </div>
        </div>
      </div>
      <div class="brand__col">
        <img src="@/assets/images/login/login-hero-img.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login__container {
  /* border: 1px solid #dedede; */
  /* border-radius: 6px; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login__card {
    border: 1px solid #fcfcfc;
    border-radius: 12px;
    display: flex;
    height: 100%;
    max-height: 550px;
    max-width: 1000px;
    overflow: hidden;
    width: 100%;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);

    .brand__col {
      background-color: #F3F4FD;
      padding: 26px;
      width: 50%;
    }

    .form__col {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 314px;
      padding: 28px;
      width: 50%;

      .form__field {
        margin-bottom: 1.2rem;
        width: 100%;
      }

      .welcome-msg {
        color: #0c365a;
        font-size: 28px;
        font-weight: 600;
      }
    }
  }
}
</style>
