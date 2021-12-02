<template>
  <div class="wrapper">
    <Header :title="title" :links="links" />
    <div class="wrapper-content">
      <div class="container">
        <RouterView />
      </div>
    </div>
    <Footer :links="links" />
  </div>
</template>

<script>
import { title, links } from '@/config'

import Header from '@/components/TheHeader'
import Footer from '@/components/TheFooter'

export default {
  components: { Footer, Header },
  data() {
    return {
      title,
      links
    }
  }
}
</script>
