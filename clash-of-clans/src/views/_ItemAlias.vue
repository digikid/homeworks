<template>
  <div class="wrapper-person" v-if="item">
    <img :src="item.thumb" :alt="item.title" />
    <h1 class="title">{{ item.title }}</h1>
    <p>{{ item.text }}</p>
    <Stats :items="item.info" />
    <div class="back">
      <RouterLink to="/" class="btn btnPrimary">Back to home</RouterLink>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

import Stats from '@/components/UI/Stats'

export default {
  name: 'ItemAlias',
  components: { Stats },
  setup() {
    const route = useRoute()
    const { item } = route.meta

    return {
      item
    }
  }
}
</script>

<style lang="scss">
.wrapper-person {
  width: 900px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  .title {
    color: #fff;
  }

  .back {
    margin-top: 24px;
  }

  .card-stats {
    border-radius: 14px;
    margin: 30px auto;
  }
}
</style>
