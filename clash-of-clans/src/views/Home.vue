<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="item in items" :key="item.id">
      <div class="card__wrapper">
        <Card
          :name="`level ${item.level}`"
          :title="item.title"
          :thumb="item.thumb"
          :alias="`/${item.alias}`"
        >
          <p>{{ item.text }}</p>
          <template #footer>
            <Stats :items="item.info" />
          </template>
        </Card>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import items from '@/seeders/items'

import Card from '@/components/UI/Card'
import Stats from '@/components/UI/Stats'

export default {
  name: 'Home',
  components: { Stats, Card, Carousel, Slide, Navigation },
  setup() {
    const settings = {
      wrapAround: true,
      snapAlign: 'center'
    }

    const breakpoints = {
      0: {
        itemsToShow: 1
      },
      768: {
        itemsToShow: 2
      },
      1200: {
        itemsToShow: 3
      }
    }

    return {
      items,
      settings,
      breakpoints
    }
  }
}
</script>
