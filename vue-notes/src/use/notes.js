import { computed } from 'vue'
import { useStore } from 'vuex'

export const useNotes = () => {
  const store = useStore()

  const items = computed(() => store.getters['notes/items'])

  const load = async () => await store.dispatch('notes/load')
  const add = async item => await store.dispatch('notes/add', item)
  const remove = async i => await store.dispatch('notes/remove', i)

  return {
    items,
    load,
    add,
    remove
  }
}
