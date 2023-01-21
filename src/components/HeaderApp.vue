<template>
  <v-app-bar app color="primary" dense dark>
    <v-row class="d-flex justify-center"
      ><v-col cols="10" class="d-flex">
        <v-toolbar-title>{{
          $store.state.companyInformation.company.name
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          class="btn-test"
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          :to="link.url"
          >{{ link.label }}</v-btn
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
@Component
export default class HeaderApp extends Vue {
  links = [...this.$store.state.servicesNav, ...this.$store.state.infoNav];
}
</script>
<style lang="scss" scoped></style>
