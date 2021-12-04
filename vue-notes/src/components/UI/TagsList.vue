<template>
  <div class="tags-list" v-if="items.length">
    <div
      class="tag-item"
      v-for="item in items"
      :key="item"
      :class="{
        isPreview,
        isActive: activeItems.includes(item)
      }"
      @click="onClick(item)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsList',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    activeItems: {
      type: Array,
      default: () => []
    },
    isPreview: {
      type: Boolean
    },
    isActive: {
      type: Boolean
    }
  },
  setup(_, { emit }) {
    const onClick = item => {
      emit('onClick', item)
    }

    return {
      onClick
    }
  }
}
</script>

<style lang="scss">
.tags-list {
  display: flex;
  justify-content: center;
  padding: 10px 0;
}

.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;

  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;

    &:before {
      content: '#';
    }
  }

  &.isActive {
    color: #fff;
    background-color: #02b178;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
