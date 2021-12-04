<template>
  <div class="notes-list" v-if="items.length">
    <div class="note-item" v-for="(item, i) in items" :key="i">
      <div class="note-header">
        <p>{{ item.title }}</p>
        <a class="note-remove" href="#" @click.prevent="onRemove(i)"
          >&#10005;</a
        >
      </div>
      <div class="note-footer" v-if="item.tags && item.tags.length">
        <TagsList :items="item.tags" isPreview />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList'

export default {
  name: 'NotesList',
  components: { TagsList },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(_, { emit }) {
    const onRemove = i => {
      emit('onRemove', i)
    }

    return {
      onRemove
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}

.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
