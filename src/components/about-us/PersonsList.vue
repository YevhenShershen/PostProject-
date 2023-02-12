<template>
  <div>
    <v-row v-if="nextEmployees">
      <v-col
        xl="4"
        lg="4"
        md="5"
        sm="12"
        xs="12"
        v-for="(item, id) in nextEmployees"
        :key="`card-${id}`"
      >
        <Card
          :is-link="true"
          :employee="item"
          class="d-flex justify-space-around"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-center">
      <button
        class="app-btn person-list_btn"
        v-if="isButtonShowed"
        @click="incrementElements"
      >
        Show more persons
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Card from "@/components/about-us/Card.vue";
import { Employee } from "@/store/types";

@Component({
  components: { Card },
  computed: {
    ...mapGetters({
      employees: "employees/GET_EMPLOYEES",
    }),
  },
})
export default class PersonsList extends Vue {
  public employees!: Employee[];
  private elementsToShow = 5;
  private readonly elementsToIncrement = 3;

  public get isButtonShowed(): boolean {
    return this.elementsToShow < this.employees.length;
  }

  public get nextEmployees(): Employee[] {
    return this.employees.slice(0, this.elementsToShow);
  }

  public incrementElements(): void {
    this.elementsToShow += this.elementsToIncrement;
  }
}
</script>
<style lang="scss" scoped>
.person-list_btn {
  min-width: 374px;
  margin-top: 20px;
}
</style>
