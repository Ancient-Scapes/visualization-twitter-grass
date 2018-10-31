import Vue from 'vue';
import Router from 'vue-router';
import Vuesax from 'vuesax';
import Home from './views/Home.vue';
import moment from 'moment';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Router);
Vue.use(Vuesax);
Vue.prototype._moment = moment;

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
  ],
});
