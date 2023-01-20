<template>
  <div class="our-offer app-title">
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
            <button class="our-offer_but">Sprawdź ofertę</button>
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
  services = [
    {
      label: "Strony internetowe",
      url: "/websites",
      // src: require("url(./assets/images/services/services-shops.jpg"),
    },
    {
      label: "Sklepy internetowe",
      url: "/web-shops",
      // src: require("url(./assets/images/services/services-shops.jpg"),
    },
    {
      label: "Naprawa, modernizacja stron",
      url: "/repair-pages",
      // src: require("url(./assets/images/services/services-shops.jpg"),
    },
  ];
}
</script>
<style lang="scss" scoped>
.our-offer {
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
    background: #ad0000;
    color: white;
    border-radius: 30px;
    padding: 8px 60px;
    margin-bottom: 35px;
  }
}
.our-offer_but:hover {
  background-color: #b33030;
  color: rgb(221, 216, 216);
  -webkit-box-shadow: 8px 8px 37px -7px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 37px -7px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 37px -7px rgba(66, 68, 90, 1);
}
</style>
<!-- :style="{ backgroundImage: `url(${serv.src})` }" -->
