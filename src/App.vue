<!-- vue-property-decorator -->
<template>
  <v-app>
    <HeaderApp />
    <Slider />
    <v-row class="d-flex justify-center"
      ><v-col cols="10">
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>
    <FooterApp />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderApp from "./components/HeaderApp.vue";
import Slider from "./components/main/Slider.vue";
import FooterApp from "./components/FooterApp.vue";

export default Vue.extend({
  name: "App",
  components: { HeaderApp, Slider, FooterApp },
  mounted() {
    this.$store.dispatch("employees/loadEmployeersList");
  },
});
</script>
<style lang="scss" scoped></style>
