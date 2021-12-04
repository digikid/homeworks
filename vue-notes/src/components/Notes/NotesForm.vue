<template>
  <form class="form" @submit.prevent="onSubmit">
    <textarea
      required
      v-model="value"
      placeholder="Type your text here"
    ></textarea>
    <TagsList
      :items="tags"
      :activeItems="activeTags"
      @onClick="handleTagsClick"
    />
    <button class="btn btnPrimary" type="submit" :disabled="!value">
      Add new note
    </button>
  </form>
</template>

<script>
import { ref } from 'vue'

import defaultTags from '@/seeders/tags'

import TagsList from '@/components/UI/TagsList'

export default {
  name: 'NotesForm',
  components: { TagsList },
  setup(_, { emit }) {
    const value = ref()
    const tags = ref(defaultTags)
    const activeTags = ref([])

    const onSubmit = () => {
      emit('onSubmit', {
        title: value.value,
        tags: activeTags.value
      })

      value.value = ''
      activeTags.value = []
    }

    const handleTagsClick = item => {
      const index = activeTags.value.findIndex(i => i === item)

      if (index > -1) {
        activeTags.value.splice(index, 1)
      } else {
        activeTags.value.push(item)
      }
    }

    return {
      value,
      tags,
      activeTags,
      onSubmit,
      handleTagsClick
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;

  textarea {
    margin-bottom: 0;
  }

  button {
    transition: opacity 0.15s ease-in-out, filter 0.15s ease-in-out;

    &[disabled] {
      opacity: 0.3;
      filter: grayscale(1);
      pointer-events: none;
    }
  }
}
</style>
