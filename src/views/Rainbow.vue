<template>
  <div id="Rainbow">
    <div class="rainbow-img">
      <img :src='catsImg[0].imgSrc' alt="cat-pic"/>
      <p>{{catsImg[0].name}}</p>
    </div>
    <!--<div>
      <button class="rainbow-btn" id="black" >B</button>
      <button class="rainbow-btn" id="white">W</button>
      <button class="rainbow-btn" id="red">R</button>
      <button class="rainbow-btn" id="orange">O</button>
      <button class="rainbow-btn" id="yellow">Y</button>
      <button class="rainbow-btn" id="green">G</button>
      <button class="rainbow-btn" id="blue">B</button>
      <button class="rainbow-btn" id="grey">G</button>
      <button class="rainbow-btn" id="purple">P</button>
    </div>-->
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class Rainbow extends Vue{
private currentIdx = 0;
private catsImg = [
   {
          "id":0,
          "name": "Black Cat",
          'imgSrc':'../assets/black-cat.jpg'
      },
      {
          "id":1,
          "name": "White Cat",
          "src":"../assets/white-cat.jpg"
      },
      {
          "id":2,
          "name": "Red Cat",
          "src":"../assets/red-cat.jpg"
      },
      {
          "id":3,
          "name": "Orange Cat",
          "src":"../assets/orange-cat.jpg"
      },
      {
          "id":4,
          "name": "Yellow Cat",
          "src":"../assets/yellow-cat.jpg"
      },
      {
          "id":5,
          "name": "Green Cat",
          "src":"../assets/green-cat.jpg"
      },
      {
          "id":6,
          "name": "Blue Cat",
          "src":"../assets/blue-cat.jpg"
      },
      {
          "id":7,
          "name": "Grey Cat",
          "src":"../assets/grey-cat.jpg"
      },
      {
          "id":8,
          "name": "Purple Cat",
          "src":"../assets/purple-cat.jpg"
      }
]


  
}
</script>
<style lang="scss" scoped>

</style>


