<template>
  <div class="card">
    <div class="card-img__wrapper" v-if="thumb">
      <img :src="thumb" :alt="title" />
    </div>
    <div class="card-name">{{ name }}</div>
    <div class="card-title">{{ title }}</div>
    <div class="card-body">
      <slot />
      <RouterLink v-if="alias" :to="alias" class="link">See more</RouterLink>
    </div>
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: String,
    thumb: String,
    alias: String
  }
}
</script>
