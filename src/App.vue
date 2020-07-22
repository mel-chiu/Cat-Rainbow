<template>
  <div id="app">
    <nav>
      <nav-bar/>
    </nav>
    <router-view/>
    <footer>
    </footer>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import navbar from './components/navbar/navbar.vue'

export default Vue.extend({
  name: 'App',
  components:{
    'nav-bar' : navbar
  }
})
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4f55;
  font-family: 'Fjalla One', sans-serif;
}

</style>
