import Vue from 'vue';
import Router from 'vue-router';
import Vuesax from 'vuesax';
import moment from 'moment';
import Home from './views/Home.vue';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Router);
Vue.use(Vuesax);
Vue.prototype.$moment = moment;

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/usage',
      name: 'usage',
      component: () => import('./views/Usage.vue'),
    },
  ],
});
