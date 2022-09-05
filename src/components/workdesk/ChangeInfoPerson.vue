<template>
  <v-col cols="6" class="change-info">
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
      <v-col>
        <div class="d-flex align-center">
          <v-dialog v-model="dialog" persistent max-width="590">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                color="cyan"
                class="mx-4"
                v-bind="attrs"
                v-on="on"
                @click="changePersonInfo(person)"
              >
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">
                Change information about person
              </v-card-title>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="desk-form ma-4"
              >
                <v-text-field
                  v-model="person.personName"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="personChange.personSurname"
                  :counter="15"
                  :rules="surnameRules"
                  label="Surname"
                  required
                ></v-text-field>

                <v-select
                  v-model="personChange.personArea"
                  :items="$store.state.areas"
                  :rules="[(v) => !!v || 'Area is required']"
                  :label="'Area: ' + person.personArea"
                  required
                ></v-select>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    Disagree
                  </v-btn>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="validate(index, person)"
                  >
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>

          <v-btn color="error" @click="$store.commit('removePerson', index)"
            >DELETE</v-btn
          >
        </div></v-col
      >
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPersonInfo } from "@/services/models/IPerson-info.model";
import { mapState } from "vuex";
@Component({
  computed: mapState(["information"]),
})
export default class ChangeInfoPerson extends Vue {
  @Prop({ required: true }) readonly persons!: any;
  personChange: IPersonInfo = {
    personId: 0,
    personName: "",
    personSurname: "",
    personArea: true,
    personIsWork: true,
    personExtraWork: 0,
  };
  valid = true;
  dialog = false;
  nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) =>
      (v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  surnameRules = [
    (v: string) => !!v || "Surname is required",
    (v: string) =>
      (v && v.length <= 10) || "Surname must be less than 10 characters",
  ];
  area = "";
  items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  checkbox = false;
  changePersonInfo(item: IPersonInfo) {
    this.personChange = {
      personId: item.personId,
      personName: item.personName,
      personSurname: item.personSurname,
      personArea: item.personArea,
      personIsWork: item.personIsWork,
      personExtraWork: item.personExtraWork,
    };
  }
  validate(id: number, item: IPersonInfo) {
    if (item.personName !== null && item.personSurname !== null) {
      this.personChange = {
        personId: item.personId,
        personName: item.personName,
        personSurname: item.personSurname,
        personArea: item.personArea,
        personIsWork: item.personIsWork,
        personExtraWork: item.personExtraWork,
      };
      console.log(id);
      this.persons.push(this.personChange);
      this.persons.splice(id, 1, this.personChange);
      this.personChange = {
        personId: 0,
        personName: "",
        personSurname: "",
        personArea: true,
        personIsWork: true,
        personExtraWork: 0,
      };
      this.dialog = false;
    } else {
      (this.$refs as { form: HTMLFormElement }).form.validate();
      this.dialog = false;
    }
  }
  changeWorkInfo(item: boolean) {
    item;
    return;
  }
  sortInformation(sortedKey) {
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
  .testBtn {
    border-radius: 50%;
  }
}
</style>
