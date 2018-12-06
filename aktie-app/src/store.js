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

      let array = state.favorites;
      let exists = false;

      for(let i= 0; i < array.length; i++){
        if(array[i].nameDisplay==favo.nameDisplay){
          exists = true;
        }
      }

      if(!exists){
        state.favorites.push(favo);
      }
      
    },
    removeFavorit: (state, name) =>{

      let array = state.favorites;

      console.log(array[0].nameDisplay);
      console.log(name);
      
      for(let i= 0; i < array.length; i++){

        if(array[i].nameDisplay == name){
          
          array.splice(i,1); 
          console.log(i);
        }
        

      }

    }

  },
  actions: {

  }
})
