<template>
  <div class="form-wrapper">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">
          Sign In
        </router-link>
      </p>
      <h1>Create your PVFN-Blogs account</h1>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <fai class="icon" icon="user" />
        </div>
        <div class="input">
          <input type="password" placeholder="Last Name" v-model="lastName" />
          <fai class="icon" icon="user" />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <fai class="icon" icon="user" />
        </div>

        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <fai class="icon" icon="envelope" />
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <fai class="icon" icon="lock" />
        </div>
      </div>

      <button class="button">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  h2 {
    min-width: 350px;
  }
}
</style>
