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
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Cat extends Vue{

  
}
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";

#Cat {
  position: absolute;
  background-color: rgb(47, 197, 172);
  top: 0;
  width: $width;
  height: $height;
  overflow: hidden;
  cursor: normal;
}
#contents {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  >.content{
    font-size: 10rem;
    cursor: url(../assets/logo.png), auto;
  }
}

#contents:hover {
  color: rgb(231, 236, 178);
  transition: 0.5s ease-out linear;
}
@media(max-width: 440px){
  .content{
    font-size: 1rem;
  }
}
</style>
