<template>
  <v-col cols="3">
    <h2 class="mt-4">Add person {{ $store.getters.allAreas }}</h2>
    <v-form ref="form" v-model="valid" lazy-validation class="desk-form">
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
        v-model="area"
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
        Add Information
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset">
        Reset Information</v-btn
      >
      <v-btn class="success" @click="enumEcho">enum</v-btn>
    </v-form></v-col
  >
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import categories from "@/services/enums/categories";
@Component({
  components: {},
})
export default class AddPerson extends Vue {
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
  area = "";
  nameRules = [
    (v) => !!v || "Name is required",
    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
  ];
  surnameRules = [
    (v) => !!v || "Surname is required",
    (v) => (v && v.length <= 10) || "Surname must be less than 10 characters",
  ];
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
  enumEcho() {
    console.log(categories.LAST_ADDED_CATEGORIES);
  }
}
</script>

<style scoped lang="scss"></style>
