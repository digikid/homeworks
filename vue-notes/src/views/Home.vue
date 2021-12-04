<template>
  <NotesForm @onSubmit="handleSubmit" />
  <NotesList :items="items" @onRemove="removeHandler" />
</template>

<script>
import { ref, watch } from 'vue'

import defaultNotes from '@/seeders/notes'

import NotesForm from '@/components/Notes/NotesForm'
import NotesList from '@/components/Notes/NotesList'

export default {
  name: 'Home',
  components: { NotesList, NotesForm },
  setup() {
    const items = ref(defaultNotes)

    const localItems = localStorage.getItem('NOTES')

    const handleSubmit = item => {
      items.value.push(item)
    }

    const removeHandler = i => {
      items.value.splice(i, 1)
    }

    if (localItems) {
      items.value = JSON.parse(localItems)
    }

    watch(
      items,
      () => localStorage.setItem('NOTES', JSON.stringify(items.value)),
      {
        deep: true
      }
    )

    return {
      items,
      handleSubmit,
      removeHandler
    }
  }
}
</script>

<style lang="scss"></style>
