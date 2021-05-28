<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-show="showNavFooter" />
      <router-view />
      <Footer v-show="showNavFooter" />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  data() {
    return { showNavFooter: null };
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if (['Login', 'Register', 'ForgotPassword'].includes(this.$route.name)) {
        this.showNavFooter = false;
        return;
      }
      this.showNavFooter = true;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  color: #000;
}

.arrow-light {
  color: #fff;
}

button,
.router-button {
  transition: 500ms all ease;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(40, 40, 40, 0.7);
  }
}

.blog-card-wrapper {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-rows: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
