<template>
  <div class="container">
    <div class="ears">
      <div v-for="ear in eyesOrEars" :key="ear.key" class="ear" :id="ear.earid">
        <div class="inside-ear"></div>
      </div>
    </div>
    <div class="whiskers">
      <div  id="whisker-left">
        <div v-for= "whisker in counts" :key="whisker.key" class="whisker"></div>
      </div>
      <div id="whisker-right">
        <div v-for= "whisker in counts" :key="whisker.key" class="whisker"></div>
      </div>
    </div>
    <div class="head">
      <div class="pattern">
        <div v-for= "tabby in counts" :key="tabby.key"  class="tabby"></div>
      </div>
      <div class="eyes">
        <div v-for="eye in eyesOrEars" :key="eye.key" class="eye" :id="eye.eyeid">
          <div class="iris"></div>
        </div>
        
      </div>
      <div class="nose"></div>
      <div class="mouth">
        <div id="curve-left"></div>
        <div id="curve-right"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class CatFace extends Vue{
  private counts = [
          {key: 1},
          {key: 2},
          {key: 3}
  ]
  private eyesOrEars = [
      {
          key: 1,
          eyeid: "left-eye",
          earid: "left-ear"
      },
      {
          key: 2,
          eyeid: "right-eye",
          earid: "right-ear"
      }
  ]

  }
</script>
<style lang="scss" scoped>
@import "../styles/_variables.scss";
.container {
  position: absolute;
  margin: auto;
  display: block;
  width: 500px;
  height: 500px;
  top: 10%;
  left: 30%;
  > .head {
    position: relative;
    background-color: $body;
    border-radius: 40%;
    width: 90%;
    height: 70%;
    > .pattern {
      position: relative;
      display: flex;
      justify-content: space-even;
      > .tabby {
        position: relative;
        background-color: $pattern;
        height: 6rem;
        padding: 0 0.6rem;
        margin: 0 0.3rem;
        left: 40%;
        border-radius: 0 0 2rem 2rem;
      }
    }
    > .nose {
      background-color: $nose;
      position: relative;
      top: 3rem;
      left: 45%;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      z-index: 30;
    }
    > .mouth {
      position: relative;
      display: flex;
      justify-content: space-even;
      left: 9.8rem;
      top: 1rem;
      > #curve-left {
        position: relative;
        width: 4rem;
        height: 4rem;
        border-radius: 40%;
        box-shadow: 5px 8px 0 0 $mouth;
      }
      > #curve-right {
        position: relative;
        width: 4rem;
        height: 4rem;
        border-radius: 40%;
        box-shadow: -5px 8px 0 0 $mouth;
      }
    }
    > .eyes {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: relative;
      top: 18%;
      height: 5rem;
      > .eye {
        background-color: $mouth;
        position: relative;
        display: block;
        border-radius: 45%;
        width: 10%;
        height: 100%;

        > .iris {
          position: relative;
          background-color: white;
          border-radius: 50%;
          width: 60%;
          height: 40%;
        }
      }
    }
  }
  > .whiskers {
    position: absolute;
    z-index: 50;
    > #whisker-left {
      position: relative;
      display: flex;
      flex-direction: column;
      .whisker {
        position: relative;
        background-color: $nose;
        width: 5rem;
        height: 0.3rem;
        margin: 10%;
        top: 12rem;
        right: 4rem;
        border-radius: 5px;
      }
    }
    > #whisker-right {
      position: relative;
      display: flex;
      flex-direction: column;
      .whisker {
        position: relative;
        background-color: $nose;
        width: 5rem;
        height: 0.3rem;
        margin: 10%;
        top: 8rem;
        left: 26rem;
        border-radius: 5px;
      }
    }
  }
  > .ears {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    top: 3.2rem;
    right: 1.5rem;
    z-index: 50;
    > .ear {
      width: 0;
      height: 0;
      border-left: 3.6rem solid transparent;
      border-right: 3.6rem solid transparent;
      border-bottom: 6rem solid $body;
      > .inside-ear {
        width: 0;
        height: 0;
        position: relative;
        margin: auto;
        right: 25px;
        top: 50px;
        border-left: 1.5rem solid transparent;
        border-right: 1.5rem solid transparent;
        border-bottom: 3rem solid $nose;
      }
    }
  }
}
</style>