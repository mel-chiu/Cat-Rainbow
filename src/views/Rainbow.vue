<template>
  <div id="Rainbow">
    <div class="showcase">
    <cat-carousel/>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Carousel from '@/components/carousel/Carousel.vue';


@Component({
    components: {
    "cat-carousel": Carousel
  }
    })
export default class Rainbow extends Vue{
  
}
</script>
<style lang="scss" scoped>
.showcase{
    position: relative;
    align-content: center;
    margin: auto;
    top: 100px;
}
</style>


