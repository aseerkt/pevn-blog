<template>
  <div class="form-wrapper">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>
      <h1>Login to PVFN Blogs</h1>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <fai class="icon" icon="envelope" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <fai class="icon" icon="lock" />
        </div>
      </div>
      <router-link
        class="forgot-password-link"
        :to="{ name: 'ForgotPassword' }"
      >
        Forgot your password ?
      </router-link>
      <button class="button">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  overflow-y: hidden;

  @media (min-width: 990px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;
  }

  .router-link {
    color: #000;
  }

  form {
    height: 100%;
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h1 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;

      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        input {
          font-family: inherit;
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 40px;
          height: 50px;

          &:focus {
            outline: none;
            background-color: #d5d8d7;
          }
        }
        .icon {
          transform: scale(1.7);
          opacity: 0.8;
          position: absolute;
          left: 16px;
          width: 12px;
        }
      }
    }

    .forgot-password-link {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 15px 0 32px;
      border-bottom: 1px solid transparent;
      transition: all 0.5s ease;

      &:hover {
        border-color: #303030;
      }
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;

      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-image: url(https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
