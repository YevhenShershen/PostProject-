<template>
  <v-row>
    <Card
      v-for="(item, id) in employeesList"
      :key="`card-${id}`"
      :employee="item"
    ></Card>
  </v-row>
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
      employeesList: "employees/EMPLOYEES",
    }),
  },
})
export default class PersonsList extends Vue {
  public employeesList!: Employees;
}
</script>
<style lang="scss" scoped></style>
