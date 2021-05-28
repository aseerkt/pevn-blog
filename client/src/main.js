import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faChevronRight,
  faTrash,
  faPen,
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faBars,
  faChevronRight,
  faPen,
  faTrash,
  faEnvelope,
  faLock,
  faUser,
  //
  faYoutube,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub
);

createApp(App)
  .component('fai', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
