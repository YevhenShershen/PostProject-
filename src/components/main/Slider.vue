<template>
  <v-carousel hide-delimiters style="height: 355px">
    <v-carousel-item
      v-for="(item, i) in elem"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Slider extends Vue {
  elem = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    },
  ];
}
</script>
