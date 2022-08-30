<template>
  <v-col cols="3">
    <h2 class="mt-4">Change information</h2>
    <div
      v-for="(person, index) in $store.state.staffInformation"
      :key="index"
      class="d-flex justify-space-between align-center mb-2"
    >
      <p class="desk__info ma-0">{{ person.name }} {{ person.surname }}</p>
      <div class="d-flex align-center">
        <p class="desk__area ma-0">Area: {{ person.area }}</p>

        <v-dialog v-model="dialog" persistent max-width="590">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="cyan" class="mx-4" v-bind="attrs" v-on="on">
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
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="surname"
                :counter="15"
                :rules="surnameRules"
                label="Surname"
                required
              ></v-text-field>

              <v-select
                v-model="select"
                :items="$store.state.areas"
                :rules="[(v) => !!v || 'Area is required']"
                label="Area"
                required
              ></v-select>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="validate">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>

        <v-btn color="error">DELETE</v-btn>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class ChangeInfoPerson extends Vue {
  protected person = {
    name: "",
    surname: "",
    area: "",
    isHaveArea: true,
    isActive: true,
    extraHours: "",
  };
  dialog = false;
  valid = true;
  name = "";
  surname = "";
  informationToChange = null;
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

  validate() {
    (this.dialog = false),
      (this.person = {
        name: this.name,
        surname: this.surname,
        area: this.area,
        isHaveArea: true,
        isActive: true,
        extraHours: "",
      });
    this.$store.state.staffInformation.push(this.person);
    this.person = {
      name: "",
      surname: "",
      area: "",
      isHaveArea: true,
      isActive: true,
      extraHours: "",
    };

    (this.$refs as { form: HTMLFormElement }).form.validate();
  }
  reset() {
    (this.$refs as { form: HTMLFormElement }).form.reset();
  }
}
</script>

<style scoped lang="scss"></style>
