<template>
  <v-row class="text-center">
    <v-col>
      <div class="areas">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class StaffInformation extends Vue {
  public search = "";
  public headers = [
    {
      text: "Pracownik",
      align: "start",
      filterable: false,
      value: "name",
    },
    { text: "Rejon", value: "area" },
    { text: "Nadgodziny", value: "overtime" },
    { text: "Czy jest w pracy", value: "isWork" },
  ];
  public desserts = [
    {
      name: "Yevhen Shershen",
      area: 1,
      overtime: 62,
      isWork: "true",
    },
  ];
}
</script>

<style scoped lang="scss"></style>
