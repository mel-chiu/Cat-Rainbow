<template>
  <div class="carousel">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in catImg" :key="index">
        <img :src="item.src" class="image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

@Component({
  components: {
    Swiper,
    SwiperSlide,
  },
})
export default class Carousel extends Vue {
  private swiperOption = {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      loop: true,
      grabCursor: true,
    },
  };
  private catImg = [
    {
      id: 0,
      name: "Black Cat",
      src: require("../../assets/black-cat.jpg"),
    },
    {
      id: 1,
      name: "White Cat",
      src: require("../../assets/white-cat.jpg"),
    },
    {
      id: 2,
      name: "Red Cat",
      src: require("../../assets/red-cat.jpg"),
    },
    {
      id: 3,
      name: "Orange Cat",
      src: require("../../assets/orange-cat.jpg"),
    },
    {
      id: 4,
      name: "Yellow Cat",
      src: require("../../assets/yellow-cat.jpg"),
    },
    {
      id: 5,
      name: "Green Cat",
      src: require("../../assets/green-cat.jpg"),
    },
    {
      id: 6,
      name: "Blue Cat",
      src: require("../../assets/blue-cat.jpg"),
    },
    {
      id: 7,
      name: "Grey Cat",
      src: require("../../assets/grey-cat.jpg"),
    },
    {
      id: 8,
      name: "Purple Cat",
      src: require("../../assets/purple-cat.jpg"),
    },
  ];
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 350px;
  width: 350px;
  border-radius: 50%;
  position: relative;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    .image {
      width: 350px;
      height: 350px;
    }
  }
}
</style>