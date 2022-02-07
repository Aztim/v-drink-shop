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
    setRequests (state, requests1) {
      state.requests = requests1
    }
  },

  actions: {
    async load ({ commit, dispatch }) {
      try {
        const { data } = await axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sale.json')
        // const { data } = await axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/accessories.json')

        // const [data1, data2] = await Promise.all([
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sale.json'),
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/accessories.json')
        // ])
        // const requests = Object.keys(data1).map(id => ({ ...data1[id] }))
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
