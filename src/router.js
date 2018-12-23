import Vue from 'vue';
import VueRouter from 'vue-router';
import FourOFour from './views/FourOFour';

import bus from './bus';
import Home from './views/Home';
import Team from './views/Team';
import AddTeam from './views/AddTeam';
import Player from './views/Player';
import Login from './views/Login';
import Profile from './views/Profile';
import meta from 'vue-meta';

import auth from './middleware/auth';

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
    component:Home,
  },
  {
    name: 'four-o-four',
    path: '/404',
    component: FourOFour
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    name: 'team',
    path: '/team/:id',
    component: Team
  },
  {
    name: 'player',
    path: '/player/:id',
    component: Player
  },
  {
    name: 'addplayer',
    path: '/addplayer',
    component: Player
  },
  {
    name: 'addteam',
    path: '/addteam',
    component: AddTeam
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});



router.afterEach((to, from) => {
  if (!localStorage.getItem('user')) {
    console.log('you are not login')
    router.push({name: 'login'});
  }
})

export default router;
