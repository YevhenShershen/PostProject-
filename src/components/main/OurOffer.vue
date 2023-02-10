<template>
  <div class="our-offer">
    <h2 class="our-offer_title app-title main-title">NASZA OFERTA</h2>
    <v-row class="justify-space-around">
      <v-col
        v-for="(item, id) in GET_SERVICES"
        :key="id"
        :to="item.name"
        class="our-offer_card"
        xl="3"
        lg="3"
        md="5"
        sm="12"
        xs="12"
      >
        <div class="our-offer_field">
          <img
            src="~@/assets/images/services/services-shops.jpg"
            alt=""
            class="our-offer_photo"
          />
          <p class="our-offer_text">{{ item.title }}</p>
          <router-link
            class="text-decoration-none"
            :key="`${item.name}-header-link`"
            :to="{ name: item.name }"
          >
            <button class="our-offer_but app-btn" text>
              Sprawdź ofertę
            </button></router-link
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import { Navigation } from "@/store/types";
const NavigationGetter = namespace("navigation", Getter);
@Component
export default class OurOffer extends Vue {
  @NavigationGetter GET_SERVICES!: Navigation[];
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
  &_photo {
    width: 100%;
    height: auto;
  }
  &_text {
    text-decoration: none;
  }

  &_but {
    margin-bottom: 35px;
  }
}
@media (max-width: 1263px) {
  .our-offer {
    &_title {
    }

    &_card {
      margin-bottom: 20px;
    }

    &_field {
    }

    &_photo {
    }

    &_text {
    }

    &_but {
    }
  }
}
</style>
<!-- :style="{ backgroundImage: `url(${serv.src})` }" -->
