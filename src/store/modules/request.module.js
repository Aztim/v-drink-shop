// import axios from '@/axios/request'
import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },

  mutations: {
    setRequests (state, requests) {
      state.requests = requests
    }
  },

  actions: {
    async load ({ commit, dispatch }) {
      try {
        const { data } = await axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sale.json')
        // const requests = Object.keys(data).map(id => ({ ...data[id], id }))
        commit('setRequests', data)
      } catch (e) {
        dispatch('setMessage', {
          value: e.message,
          type: 'danger'
        }, { root: true })
      }
    }

  },
  getters: {
    requests (state) {
      return state.requests
    }
  }
}
