import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/poi',
    name: 'poi',
    component: () => import('../views/PointOfInterest.vue'),
  },
  {
    path: `/poi/:id`,
    name: 'poiById',
    component: () => import('../views/PoiDetailView.vue'),
  },
  {
    path: '/cities',
    name: 'city',
    component: () => import('../views/CityView.vue'),
  },
  {
    path: '/cities/:id',
    name: 'cityByid',
    component: () => import('../views/CityDetailView.vue'),
  },
  {
    path: '/users',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/users',
    name: 'AddUsers',
    component: () => import('../views/RegistrationView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
