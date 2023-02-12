<template>
  <div class="person-info">
    <h1 class="app-title main-title">Informacja o pracowniku firmy</h1>
    <v-row class="d-flex justify-center">
      <v-col>
        <v-row v-if="employee" class="d-flex justify-center">
          <Card :employee="employee" />
          <v-col>
            <v-row class="d-flex flex-column ml-5">
              <v-col xs="12"
                ><h3 class="app-title2">INFORMACJE O FIRMIE</h3>
                <p>
                  <span class="person-info_title">Nazwa firmy:</span>
                  {{ employee.company.name }}
                </p>
                <p>
                  <span class="person-info_title">Projekt:</span>
                  {{ employee.company.catchPhrase }}
                </p>
                <p>
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
                <p>
                  <span class="person-info_title">Apartamenty:</span>
                  {{ employee.address.suite }}
                </p>
                <p>
                  <span class="person-info_title">Miasto:</span>
                  {{ employee.address.city }}
                </p>
                <p>
                  <span class="person-info_title">Kod pocztowy:</span>
                  {{ employee.address.zipcode }}
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-else class="d-flex justify-center">
          Employee not found!
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";

import Card from "@/components/about-us/Card.vue";

@Component({
  components: { Card },
  computed: {
    ...mapGetters({
      employee: "employee/getEmployee",
    }),
  },
  methods: {
    ...mapActions({
      loadEmployee: "employee/loadEmployee",
    }),
  },
})
export default class PersonInfo extends Vue {
  // Define action from ...mapActions above
  protected loadEmployee!: (id: string) => void;
  private async mounted() {
    await this.loadEmployee(this.$route.params.id);
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
