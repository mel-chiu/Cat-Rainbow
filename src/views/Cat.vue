<template>
  <div id="Cat">
    <div id="contents" @mousemove="mouseMove()">
      <div class="content" id="content-cat">Cat</div>
      <div class="content" id="content-rainbow">Rainbow</div>
    </div>
    <cat-face />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import CatFace from "../components/CatFace.vue";

@Component({
  components: {
    "cat-face": CatFace,
  },
})
export default class Cat extends Vue {
  private x = 0;
  private y = 0;
  public mouseMove(event: any) {
    this.x = event.clientX;
    this.y = event.clientY;
  }
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
  position: relative;
  top: 35%;
  left: 0%;
  z-index: 100;
  > .content {
    font-size: 10rem;
    cursor: url(../assets/logo.png), auto;
  }
}

#contents:hover {
  color: rgb(231, 236, 178);
  transition: 0.5s ease-out linear;
}
@media (max-width: 440px) {
  .content {
    font-size: 1rem;
  }
}
</style>
