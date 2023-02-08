<template>
  <div>
    <v-row>
      <Card
        v-for="(item, id) in employees.slice(0, startElement)"
        :key="`card-${id}`"
        :employee="item"
      ></Card>
    </v-row>
    <div class="d-flex justify-center">
      <button
        class="app-btn person-list_btn"
        v-if="buttonShow"
        @click="addElementToList"
      >
        Show more persons
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Card from "@/components/about-us/Card.vue";
import { mapGetters } from "vuex";
import { Employees } from "@/store/types";
@Component({
  components: { Card },
  computed: {
    ...mapGetters({
      employees: "employees/EMPLOYEES",
    }),
  },
})
export default class PersonsList extends Vue {
  public employees!: Employees;
  public employees_list!: Employees;
  public startElement = 3;
  public buttonShow = true;
  public employeesShowList = this.employees;
  addElementToList(): any {
    const employees_end = this.employees.length;
    if (this.startElement + 3 < employees_end) {
      return (this.startElement += 3);
    } else {
      this.buttonShow = !this.buttonShow;
      return (this.startElement = this.employees.length);
    }
  }
}
</script>
<style lang="scss" scoped>
.person-list_btn {
  min-width: 374px;
}
</style>
