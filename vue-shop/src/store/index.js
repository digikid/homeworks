import { createStore, createLogger } from 'vuex'

import auth from '@/store/modules/auth.module'
import products from '@/store/modules/products.module'
import card from '@/store/modules/card.module'

const plugins = []

if (process.env.NODE_ENV === 'development') {
    plugins.push(createLogger())
}

const store = createStore({
    state() {
        return {
            message: null
        }
    },
    getters: {

    },
    mutations: {
        setMessage(state, message) {
            state.message = message
        },
        clearMessage(state) {
            state.message = null
        }
    },
    actions: {
        async setMessage({ commit }, message) {
            commit('setMessage', message)

            setTimeout(() => {
                commit('clearMessage')
            }, 5000)
        }
    },
    modules: {
        auth,
        products,
        card
    },
    plugins
})


export default store
