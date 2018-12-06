import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BeerBibliotek from './views/BeerBibliotek.vue'
import BeerPage from './views/BeerPage.vue' 
import Favorites from './views/Favorites'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/beerbibliotek',
      name: 'beerBibliotek',
      component: BeerBibliotek
    },
    {
      path: '/beerPage',
      name: 'beerPage',
      component: BeerPage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
      
    }
    
  ]
})
