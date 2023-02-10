<template>
  <div class="person-info">
    <h1 class="app-title main-title">Informacja o pracowniku firmy</h1>
    <v-row class="d-flex justify-center">
      <v-col>
        <v-row>
          <Card :employee="employee"></Card>
          <v-col>
            <v-row class="d-flex flex-column ml-5">
              <v-col xs="12"
                ><h3 class="app-title2">INFORMACJE O FIRMIE</h3>
                <p>
                  <span class="person-info_title">Nazwa firmy:</span>
                  {{ employee.company.name }}
                </p>
                <p c>
                  <span class="person-info_title">Projekt:</span>
                  {{ employee.company.catchPhrase }}
                </p>
                <p c>
                  <span class="person-info_title">Opis:</span>
                  {{ employee.company.bs }}
                </p>
              </v-col>
              <v-col xs="12"
                ><h3 class="app-title2">INFORMACJA O ADRESIE</h3>
                <p>
                  <span class="person-info_title">Ulica:</span>
                  {{ employee.address.street }}
                </p>
                <p c>
                  <span class="person-info_title">Apartamenty:</span>
                  {{ employee.address.suite }}
                </p>
                <p c>
                  <span class="person-info_title">Miasto:</span>
                  {{ employee.address.city }}
                </p>
                <p c>
                  <span class="person-info_title">Kod pocztowy:</span>
                  {{ employee.address.zipcode }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
address": { "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough",
"zipcode": "92998-3874", company": { "name": "Romaguera-Crona", "catchPhrase":
"Multi-layered client-server neural-net", "bs": "harness real-time e-markets"
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Employee } from "@/store/types";
import Card from "@/components/about-us/Card.vue";
@Component({
  components: { Card },
  computed: {
    ...mapGetters({
      employee: "employee/GET_EMPLOYEE",
    }),
  },
})
export default class PersonInfo extends Vue {
  public employee!: Employee;
  mounted() {
    this.$store.dispatch("employee/LOAD_EMPLOYEE", this.$route.params.id);
  }
}
</script>
<style lang="scss" scoped>
.person-info {
  &_title {
    font-weight: 500;
  }
}
</style>
