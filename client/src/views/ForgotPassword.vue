<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="form-wrapper">
      <form class="reset">
        <h1>Reset Password</h1>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <fai icon="envelope" class="icon" />
          </div>
          <button>Reset</button>
        </div>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
export default {
  name: 'ForgotPassword',
  components: {
    Modal,
  },
  data() {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.modalMessage = '';
      this.email = '';
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 8px;
}
p {
  margin-bottom: 32px;
}
</style>
