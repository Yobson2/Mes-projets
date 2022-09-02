import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Accueil from '../views/Accueil.vue'
import Plantes from '../views/Plantes.vue'
import Registre from '../views/Registre.vue'
import NotFound from '../views/NotFound'
import Consultation from '../views/Consultation.vue'
import Infos from '../views/Infos.vue'
import Solution from '../views/Solution.vue'










const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Plantes',
    name: 'Plantes',
    component: Plantes
  },
  {
    path: '/Registre',
    name: 'Registre',
    component: Registre
  },
  {
    path: '/Consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/Infos',
    name: 'Infos',
    component: Infos
  },
  {
    path: '/Solution',
    name: 'Solution',
    component: Solution
  },
  {
    path: '/:catchAll',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
