<template>
  <div class="card-stats" v-if="items.length">
    <div class="one-third" v-for="(item, i) in items" :key="i">
      <div class="stat">{{ item.title }}</div>
      <div class="stat-value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
