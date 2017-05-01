<template>
  <div id="app">
    <blog-header></blog-header>
    <blog-banner></blog-banner>
    <blog-body></blog-body>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import header from './components/header'
import banner from './components/banner'
import body from './components/body'
import footer from './components/footer'
export default {
  name: 'app',
  components: {
    'blog-header':header,
    'blog-banner':banner,
    'blog-body':body,
    'blog-footer':footer
  }
}
</script>

<style scoped>
#app {
  font-family:  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:hover{
  text-decoration: none;
}
</style>
