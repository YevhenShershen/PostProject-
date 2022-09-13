<!-- component containing information about the persons -->
<template>
  <v-col class="change-info" cols="">
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
          {{ person.id }}
        </p></v-col
      >
      <v-col>
        <p class="desk__info ma-0">
          {{ person.name }}
        </p></v-col
      >
      <v-col>
        <p class="desk__info ma-0">
          {{ person.username }}
        </p></v-col
      >
      <v-col class="d-flex justify-space-between">
        <p class="desk__info ma-0">{{ person.phone }}</p>
        <span
          class="change-info__work mx-2 d-block"
          :class="person.phone ? 'background: green' : 'background: red'"
          @click="$store.commit('changeWorkInfo', person)"
        ></span
      ></v-col>
      <v-col
        ><p class="desk__info ma-0">Website: {{ person.website }}</p></v-col
      >

      <v-col
        ><p class="desk__area ma-0">Email: {{ person.email }}</p></v-col
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
interface Iinformation {
  id: string;
  name: string;
  username: string;
  phone: string;
  website: string;
  email: string;
}
@Component({
  computed: {},
})
export default class PersonsInformation extends Vue {
  @Prop({ required: true }) readonly persons!: any;
  public sortValue = true;
  public information: Iinformation = {
    id: "Id",
    name: "Name",
    username: "Surname",
    phone: "Phone",
    website: "Website",
    email: "Email",
  };
  sortToDown(el) {
    this.sortValue = false;
    this.persons.sort(function (a, b) {
      if (a[el] > b[el]) {
        return -1;
      }
      if (a[el] < b[el]) {
        return 1;
      }
      return 0;
    });
  }
  sortToLarger(el) {
    this.sortValue = true;
    this.persons.sort(function (a, b) {
      if (a[el] > b[el]) {
        return 1;
      }
      if (a[el] < b[el]) {
        return -1;
      }
      return 0;
    });
  }
  sortInformation(sortedKey: any) {
    if (this.sortValue) {
      this.sortToDown(sortedKey);
    } else {
      this.sortToLarger(sortedKey);
    }
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
