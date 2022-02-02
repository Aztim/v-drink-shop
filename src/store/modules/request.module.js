import axios from '@/axios/request'

export default {
  namespaced: true,
  state () {
    return {
      requests: [],
      tasks: [
      ]
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
        const requests = Object.keys(data).map(id => ({ ...data[id] }))
        commit('setRequests', requests)
      } catch (e) {
        // dispatch('setMessage', {
        //   value: e.message,
        //   type: 'danger'
        // }, { root: true })
      }
    }
  },
  getters: {
    requests (state) {
      return state.requests
    }
  }
}
