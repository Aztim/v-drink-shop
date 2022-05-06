import axios from '@/axios/request'

export default {
  namespaced: true,
  state () {
    return {
      promoProducts: [],
      products: [],
      productById: [],
      filterData: {
        option: 'title'
      }
    }
  },

  mutations: {
    setPromoProducts (state, data) {
      state.promoProducts = data
    },
    setProducts (state, data) {
      state.products = data
    },
    setProductById (state, data) {
      state.productById = data
    }
  },

  actions: {
    async loadPromoProducts ({ commit }) {
      try {
        const { data } = await axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sales_product.json')
        const tmp = []
        for (const key in data) {
          tmp.push(Object.keys(data[key]).map(id => ({ ...data[key][id] })))
        }
        // const [data1, data2] = await Promise.all([
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/sale.json'),
        //   axios.get('https://vue-drink-shop-default-rtdb.firebaseio.com/accessories.json')
        // ])

        commit('setPromoProducts', tmp)
      } catch (e) {
        // dispatch('setMessage', {
        //   value: e.message,
        //   type: 'danger'
        // }, { root: true })
      }
    },

    async loadProductById ({ commit, dispatch }, params) {
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
        commit('setProducts', request)
      } catch (e) {
        // dispatch('setMessage', {
        //   value: e.message,
        //   type: 'danger'
        // }, { root: true })
      }
    },

    filterProducts ({ state }, data) {
      state.filterData = data
    }
  },

  getters: {

    getPromoProducts (state) {
      return state.promoProducts
    },

    getProducts (state) {
      const data = state.filterData

      const filterProducts = state.products
        .filter(product => {
          if (data.featured) {
            return product.status.includes(data.featured)
          }
          return product
        })

      if (data.option) {
        switch (data.option) {
          case 'title':
            return filterProducts.sort((post1, post2) => post1[data.option]?.localeCompare(post2[data.option]))

          case 'price:asc':
            return filterProducts.sort((a, b) => a.price - b.price)

          case 'price:desc':
            return filterProducts.sort((a, b) => b.price - a.price)
        }
      }

      return filterProducts
    },

    productById (state) {
      return state.productById
    }
  }
}
