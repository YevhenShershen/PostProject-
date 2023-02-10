<template>
  <v-col>
    <h1>PERSON INFO</h1>
    <h2>{{ getEmployee }}</h2>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Employee } from "@/store/types";
@Component({
  computed: {
    ...mapGetters({
      getEmployee: "employee/GET_EMPLOYEE",
    }),
  },
})
export default class PersonInfo extends Vue {
  public getEmployee!: Employee;
  mounted() {
    this.$store.dispatch("employee/LOAD_EMPLOYEE", this.$route.params.id);
  }
}
</script>
<style lang="scss" scoped></style>
