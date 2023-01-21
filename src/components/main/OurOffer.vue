<template>
  <div class="our-offer">
    <h2 class="our-offer_title app-title main-title">NASZA OFERTA</h2>
    <v-row class="justify-space-around">
      <v-col
        cols="3"
        v-for="(serv, id) in services"
        :key="id"
        :to="serv.url"
        class="our-offer_card"
      >
        <div class="our-offer_field">
          <img src="~@/assets/images/services/services-shops.jpg" alt="" />
          <p class="our-offer_text">{{ serv.label }}</p>
          <a href="">
            <button class="our-offer_but app-btn">Sprawdź ofertę</button>
          </a>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class OurOffer extends Vue {
  services = this.$store.state.servicesNav;
}
</script>
<style lang="scss" scoped>
.our-offer {
  margin-bottom: 15px;
  &_title {
  }

  &_card {
    text-align: center;
    border: 1px solid #3a3d40;
    border-radius: 15px;
  }

  &_field {
  }

  &_text {
    text-decoration: none;
  }

  &_but {
    margin-bottom: 35px;
  }
}
</style>
<!-- :style="{ backgroundImage: `url(${serv.src})` }" -->
