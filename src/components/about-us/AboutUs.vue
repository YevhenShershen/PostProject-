<template>
  <div class="about-us">
    <h2 class="app-title main-title">Informacja o nas</h2>
    <div>
      <h2>O Firmie</h2>
      <p>
        Specjalizujemy się w obsłudze informatycznej firm. Oferujemy kompleksowe
        wsparcie: helpdesk, administrację serwerami, zarządzanie siecią oraz
        doradztwo IT. Firma informatyczna IT Company powstała w 2004 roku w
        Poznaniu. Zatrudniamy serwisantów, administratorów i programistów.
        Naszymi atutami są doświadczenie, zgrany zespół i wypracowane przez lata
        procedury. Dzięki nim możemy dostarczać stabilne rozwiązania dla naszych
        klientów.
      </p>
    </div>
    <div>
      <h2 class="app-title main-title">informacje o naszym zespole</h2>
      <!-- {{ employees }}
      {{ $store.state.persons.persons }} -->

      <v-row>
        <PersonInfo
          v-for="(employee, id) in employees"
          :key="id"
          :employee="employee"
        ></PersonInfo>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonInfo from "./PersonInfo.vue";
@Component({
  components: { PersonInfo },
})
export default class AboutUs extends Vue {
  public employees = this.$store.state.employees;
}
</script>
<style lang="scss" scoped></style>
