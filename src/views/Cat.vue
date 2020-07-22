<template>
  <div id="Cat">
    <div id="contents">
      <div class="content" id="content-cat">Cat</div>
      <div class="content" id="content-rainbow">Rainbow</div>
    </div>
    <div class="ears">
      <div class="ear"></div>
      <div class="eart"></div>
    </div>
    <div class="face">
      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="nose"></div>
      <div class="mouth"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
  name: "Cat"
};
</script>
<style scoped>
#Cat {
  position: absolute;
  background-color: rgb(94, 165, 146);
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: normal;
}
#contents {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.content {
  font-size: 10rem;
}
#contents:hover {
  color: rgb(231, 236, 178);
  transition: 0.5s ease-out linear;
}
</style>
