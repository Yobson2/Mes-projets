import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Location from '../views/Location.vue'
import Acheter from '../views/Acheter.vue'
import Contact from '../views/Contact.vue'
import  Registre  from "../views/Registre.vue";
import  Login  from "../components/Login.vue";




const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Location',
    name: 'Location',
    component: Location
  },
  {
    path: '/Acheter',
    name: 'Acheter',
    component: Acheter
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Registre',
    name: 'Registre',
    component: Registre
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
