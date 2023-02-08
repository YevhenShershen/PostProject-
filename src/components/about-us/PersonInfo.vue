<template>
  <v-col>
    <h1>PERSON INFO</h1>
    <h2>{{ employee }}</h2>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Employee } from "@/store/types";
@Component({
  computed: {
    ...mapGetters({
      employee: "employees/getEmployee",
    }),
  },
})
export default class PersonInfo extends Vue {
  public employee!: Employee;
}
</script>
<style lang="scss" scoped></style>
