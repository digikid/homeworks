import { storage } from '@/utils/storage'
import { fakeApi } from '@/utils/fakeApi'

import notes from '@/seeders/notes'

const { get, set } = storage()

export default {
  namespaced: true,
  state() {
    return {
      items: get('NOTES') || notes
    }
  },
  getters: {
    items({ items }) {
      return items
    }
  },
  mutations: {
    add(state, item) {
      state.items.push(item)

      set('NOTES', state.items)
    },
    remove(state, i) {
      if (i > state.items.length - 1) return

      state.items.splice(i, 1)
    }
  },
  actions: {
    async add({ commit }, item) {
      await fakeApi()

      commit('add', item)
    },
    async remove({ commit }, i) {
      await fakeApi()

      commit('remove', i)
    }
  }
}
