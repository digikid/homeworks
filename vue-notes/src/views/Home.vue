<template>
  <NotesForm @onSubmit="add" />
  <NotesList :items="items" @onRemove="remove" />
</template>

<script>
import { useNotes } from '@/use/notes'

import NotesForm from '@/components/Notes/NotesForm'
import NotesList from '@/components/Notes/NotesList'

export default {
  name: 'Home',
  components: { NotesList, NotesForm },
  setup() {
    const { items, add, remove } = useNotes()

    return {
      items,
      add,
      remove
    }
  }
}
</script>
