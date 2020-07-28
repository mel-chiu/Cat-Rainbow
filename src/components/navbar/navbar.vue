<template>
  <div id="Navbar">
    <div id="logo">
      <img src="../../assets/logo.png" />
    </div>
    <div id="links">
      <router-link to="/">Cat</router-link>||
      <router-link to="/rainbow">Rainbow</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "navbar"
});
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
  font-family: 'Red Rose', cursive;
  >a{
    text-decoration: none;
    color: #ccc;
    margin: 0 4px;
    font-family: 'Red Rose', cursive;
  }
}

</style>