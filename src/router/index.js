import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Modernla from '../views/Modernla.vue';
import example2 from '../views/example2.vue';
import example3 from '../views/example3.vue';
import example4 from '../views/example4.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Modernla',
    name: 'Modernla',
    component: Modernla
  },
  {
    path: '/example2',
    name: 'example2',
    component: example2
  },
  {
    path: '/example3',
    name: 'example3',
    component: example3
  },
  {
    path: '/example4',
    name: 'example4',
    component: example4
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
