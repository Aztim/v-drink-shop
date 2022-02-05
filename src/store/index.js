import { createStore } from 'vuex'
import request from './modules/request.module'

export default createStore({
  state: {
    favoriteProductsData: [],
    favoriteProductsDetails: []
  },
  mutations: {
    addToFavoriteList (state, id) {
      state.favoriteProductsData.push(id)
    },
    removeFromFavoriteList (state, id) {
      const index = state.favoriteProductsData.indexOf(id)
      state.favoriteProductsData.splice(index, 1)
      // state.favoriteMoviesDetails = state.favoriteMoviesDetails.filter(f => f.id !== id)
      // localStorage.setItem('favoriteMoviesIds', JSON.stringify(state.favoriteMoviesIds))
    }
  },
  actions: {
    addToFavoriteList ({ state, getters, commit }, id) {
      if (!getters.hasProduct(id)) {
        commit('addToFavoriteList', id)
        // localStorage.setItem('favoriteProductId', JSON.stringify(state.favoriteProductId))
      } else {
        commit('removeFromFavoriteList', id)
      }
    }
  },
  getters: {
    hasProduct: state => id => state.favoriteProductsData.some(pr => pr === id)
  },
  modules: {
    request
  }

})
