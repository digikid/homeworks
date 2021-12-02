<template>
  <div class="page404">
    <h1 class="title">404</h1>
    <p>Page doesn't exist.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss">
.page404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5%;

  h1 {
    font-size: 20vw;
    background: -webkit-linear-gradient(45deg, #ec9b3b, #cd750e 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 3vw;
  }
}
</style>
