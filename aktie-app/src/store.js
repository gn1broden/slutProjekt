import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productId: null,
    favorites: []

  },
  getters:{
    getBeerId: state =>{
      return state.productId;
    },
    getFavortites: state =>{
      return state.favorites;
    }

  },
  mutations: {
    setStoreBeerId: (state, id) =>{
      state.productId = id;
    },
    addFavorites: (state, favo) => {

      state.favorites.push(favo);

    }

  },
  actions: {

  }
})
