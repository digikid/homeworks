<template>
  <header class="header">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <RouterLink class="navbar-logo" to="/">
              {{ title }}
            </RouterLink>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.alias">
                <RouterLink class="navbar-link" :to="link.url">
                  {{ link.title }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
