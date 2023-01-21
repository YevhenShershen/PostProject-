<!-- vue-property-decorator -->
<template>
  <v-app>
    <HeaderApp />
    <Slider />
    <v-row class="d-flex justify-center"
      ><v-col cols="10">
        <v-main>
          <MainPage />
        </v-main>
      </v-col>
    </v-row>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          <strong>Our contact: shershen.yevhen@gmail.com</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderApp from "./components/HeaderApp.vue";
import Slider from "./components/main/Slider.vue";
import MainPage from "./components/MainPage.vue";

export default Vue.extend({
  name: "App",
  components: { HeaderApp, Slider, MainPage },
});
</script>
<style lang="scss" scoped></style>
