<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
        <strong>Our contact e-mail: {{ getMessage }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FooterApp extends Vue {
  get getMessage() {
    return this.$store.state.companyInformation.email;
  }
}
</script>
<style lang="scss" scoped></style>
