import { createStore, createLogger } from 'vuex'

import notes from '@/store/modules/notes.module'

const { NODE_ENV } = process.env

const plugins = []

if (NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export const store = createStore({
  modules: {
    notes
  },
  plugins
})
