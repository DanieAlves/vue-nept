import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import CompanyRegistration from '../views/CompanyRegistration.vue'
import IndicationRegistration from '../views/IndicationRegistration.vue'
import SearchProfile from '../views/SearchProfile.vue'
import ProfileDetail from '../views/ProfileDetail.vue'
import ImportColab from '../views/ImportColab.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: "/home",
      name: 'home',
      component: Home
    },
    {
      path: "/company",
      name: "company-registration",
      component: CompanyRegistration
    },
    {
      path: "/indication",
      name: "indication-registration",
      component: IndicationRegistration
    },
    {
      path: "/search",
      name: "search-perfil",
      component: SearchProfile
    },
    {
      path: "/profile/:id",
      name: "ProfileDetail",
      component: ProfileDetail
    },
    {
      path: "/import-colab",
      name: "importColab",
      component: ImportColab
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: SignUp
    },
    {
      path: '*',
      redirect: '/'
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
