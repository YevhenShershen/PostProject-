<template>
  <v-app-bar app color="primary" dense dark>
    <v-row class="d-flex justify-center"
      ><v-col cols="10" class="d-flex">
        <v-toolbar-title>TUTAJ MA BYĆ LOGIN FIRMY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          class="btn-test"
          v-for="link in navigation.navigations"
          :key="`${link.label}-header-link`"
          text
        >
          <router-link :to="{ name: link.url }">{{
            link.label
          }}</router-link></v-btn
        >
        <v-btn class="btn-test" text
          ><v-app-bar-nav-icon></v-app-bar-nav-icon
        ></v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Navigations } from "@/store/types";
import { State } from "vuex-class";
@Component
export default class HeaderApp extends Vue {
  @State navigation!: Navigations;
}
</script>
<style lang="scss" scoped></style>
