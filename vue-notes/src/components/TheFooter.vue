<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.alias">
          <RouterLink class="navbar-link" :to="link.url">
            {{ link.title }}
          </RouterLink>
        </li>
      </ul>

      <!-- link to course -->
      <ul class="navbar-list" style="margin-top: 14px">
        <li class="navbar-item" style="opacity: 0.6; font-size: 14px">
          <a href="https://tocode.ru" class="navbar-link"
            >Сделано на курсе "Vue.js 3"</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
