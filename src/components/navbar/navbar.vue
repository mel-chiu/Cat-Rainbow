<template>
  <div id="Navbar">
    <div id="logo">
      <img src="../../assets/logo.png" />
    </div>
    <div id="links">
      <router-link class="router" to="/">Cat</router-link>||
      <router-link class="router" to="/rainbow">Rainbow</router-link>

      <div id="dark-mode" @click="dark = !dark" >
        <img src="../../assets/bulb-dark.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class Navbar extends Vue {
  get dark() {
    return this.$store.state.dark;
  } 
}
</script>
<style lang="scss" scoped>
#Navbar {
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  top: 0;
  padding: 10px;
  z-index: 400;
}
#links {
  position: relative;
  right: 50px;
  margin-top: 10px;
  color: #ccc;
  font-family: "Red Rose", cursive;
  > .router {
    text-decoration: none;
    color: #ccc;
    margin: 0 4px;
    font-family: "Red Rose", cursive;
  }

  > #dark-mode {
    display: block;
    cursor: pointer;
  }
}
</style>