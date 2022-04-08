import axios from '@/axios/request'

export default {
  namespaced: true,
  state () {
    return {
      requests: [],
      allProducts: [],
      product: []
    }
  },

  mutations: {
    setRequests (state, requests) {
      state.requests = requests
    },
    setProducts (state, requests2) {
      state.products = requests2
    },
    setProductById (state, allProducts) {
      state.product = allProducts
    }
  },

  actions: {
    async load ({ commit, dispatch }) {
      try {
        const { data } = await axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sales_product.json')

        // const [data1, data2] = await Promise.all([
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sale.json'),
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/accessories.json')
        // ])
        // const requests = Object.keys(data).map(id => ({ ...data[id] }))

        commit('setRequests', data)
      } catch (e) {
        // dispatch('setMessage', {
        //   value: e.message,
        //   type: 'danger'
        // }, { root: true })
      }
    },

    async loadItemById ({ commit, dispatch }, params) {
      const { slug, id } = params
      try {
        const { data } = await axios.get(`https://vue-drink-shop-default-rtdb.firebaseio.com/products/${slug}/${id}.json`)
        commit('setProductById', data)
      } catch (e) {
        // dispatch('setMessage', {
        //   value: e.message,
        //   type: 'danger'
        // }, { root: true })
      }
    },

    async loadProductsByType ({ commit, dispatch }, slug) {
      try {
        const { data } = await axios.get(`https://vue-drink-shop-default-rtdb.firebaseio.com/products/${slug}.json`)
        const request = Object.keys(data).map(id => ({ ...data[id], id }))
        console.log(request)

        commit('setProducts', request)
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
    },
    products (state) {
      return state.products
    },
    oneProduct (state) {
      return state.product
    }
  }
}
