<template>
  <div class="home d-flex justify-center align-center">
    <h1 class="home__title">
      This program was created for convenient work with personnel.
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  &__title {
    font-size: 100px;
  }
}
</style>
