<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="surname"
      :counter="10"
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

    <v-checkbox
      v-model="checkbox"
      :rules="[(v) => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class WorkDesk extends Vue {
  protected person = {
    name: "",
    surname: "",
    area: "",
    isHaveArea: true,
    isActive: true,
    extraHours: "",
  };

  valid = true;
  name = "";
  surname = "";
  nameRules = [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  surnameRules = [
    (v) => !!v || "Surname is required",
    (v) => (v && v.length <= 10) || "Surname must be less than 10 characters",
  ];
  area = "";
  items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  checkbox = false;

  validate() {
    this.person = {
      name: this.name,
      surname: this.surname,
      area: this.area,
      isHaveArea: true,
      isActive: true,
      extraHours: "",
    };
    this.$store.state.staffInformation.push(this.person);
    this.person = {
      name: "",
      surname: "",
      area: "",
      isHaveArea: true,
      isActive: true,
      extraHours: "",
    };
    this.$refs.form.validate();
  }
  reset() {
    this.$refs.form.reset();
  }
  resetValidation() {
    this.$refs.form.resetValidation();
  }
}
</script>

<style scoped lang="scss"></style>
