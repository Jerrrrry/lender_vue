import Vue from 'vue';
import VueRouter from 'vue-router';
import FourOFour from './views/FourOFour';

import bus from './bus';
import Home from './views/Home';

import meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(meta);


const routes = [
  {
    name: 'index',
    path: '/',
    redirect:'/index'
  },
  {
    name: 'home',
    path: '/index',
    component:Home
  },
  {
    name: 'four-o-four',
    path: '/404',
    component: FourOFour
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});



router.afterEach((to, from) => {
  console.log('good')
})

export default router;
