<template>
  <v-col class="change-info">
    <h2 class="mt-4">Change information</h2>
    <v-row>
      <v-col v-for="[key, value] in Object.entries(information)" :key="key">
        <span @click="sortInformation(key)" class="change-info__header">
          {{ value }}
        </span></v-col
      >
      <v-col></v-col>
    </v-row>
    <v-row
      v-for="(person, index) in persons"
      :key="index"
      class="d-flex justify-space-between align-center mb-2"
    >
      <v-col>
        <p class="desk__info ma-0">
          {{ person.personId }}
        </p></v-col
      >
      <v-col>
        <p class="desk__info ma-0">
          {{ person.personName }}
        </p></v-col
      >
      <v-col>
        <p class="desk__info ma-0">
          {{ person.personSurname }}
        </p></v-col
      >
      <v-col class="d-flex justify-space-between">
        <p class="desk__info ma-0">Work: {{ person.personIsWork }}</p>
        <span
          class="change-info__work mx-2 d-block"
          :class="person.personIsWork ? 'background: green' : 'background: red'"
          @click="$store.commit('changeWorkInfo', person)"
        ></span
      ></v-col>
      <v-col
        ><p class="desk__info ma-0">
          Extra work: {{ person.personExtraWork }}
        </p></v-col
      >

      <v-col
        ><p class="desk__area ma-0">Area: {{ person.personArea }}</p></v-col
      >
      <v-col class="d-flex">
        <v-btn
          dark
          color="cyan"
          class="mx-4"
          @click="$store.commit('receivingPersonInfo', person)"
        >
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>

        <v-btn color="error" @click="$store.commit('removePerson', index)"
          >DELETE</v-btn
        >
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonInformation from "@/components/workdesk/AddPerson.vue";
interface Iinformation {
  personId: string;
  personName: string;
  personSurname: string;
  personIsWork: string;
  personExtraWork: string;
  persnArea: string;
}
@Component({
  components: {
    PersonInformation,
  },
})
export default class ChangeInfoPerson extends Vue {
  @Prop({ required: true }) readonly persons!: any;

  public information: Iinformation = {
    personId: "Id",
    personName: "Name",
    personSurname: "Surname",
    personIsWork: "Is work?",
    personExtraWork: "Extra work",
    persnArea: "Area",
  };
  sortInformation(sortedKey: number | string) {
    this.persons.sort((a, b) => a[sortedKey] - b[sortedKey]);
  }
}
</script>

<style scoped lang="scss">
.change-info {
  &__work {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  &__header {
    font-weight: 700;
    font-size: 19px;
    cursor: pointer;
    width: 100%;
    height: auto;
    &:hover {
      color: green;
    }
  }
}
</style>
