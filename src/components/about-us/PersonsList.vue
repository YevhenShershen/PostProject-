<template>
  <div>
    <v-row class="d-flex justify-space-around">
      <Card
        v-for="(item, id) in employees.slice(0, elements)"
        :key="`card-${id}`"
        :employee="item"
        @click="getEmployeeById(item.id)"
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
import { Employees, Employee } from "@/store/types";
@Component({
  components: { Card },
  computed: {
    ...mapGetters({
      employees: "employees/getEmployees",
      getEmployeeById: "employees/getEmployeeById",
      employee: "employees/getEmployee",
    }),
  },
})
export default class PersonsList extends Vue {
  public el = 0;
  public employees!: Employees;
  public employee!: Employee;
  public employees_list!: Employees;
  public elements = 3;
  public buttonShow = true;
  public employeesShowList = this.employees;
  addElementToList(): any {
    const employees_end = this.employees.length;
    if (this.elements + 3 < employees_end) {
      return (this.elements += 3);
    } else {
      this.buttonShow = !this.buttonShow;
      return (this.elements = this.employees.length);
    }
  }
}
</script>
<style lang="scss" scoped>
.person-list_btn {
  min-width: 374px;
}
</style>
