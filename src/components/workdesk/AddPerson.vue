<template>
  <v-col cols="3">
    <h2 class="mt-4">Add person</h2>
    <v-form ref="form" v-model="valid" lazy-validation class="desk-form">
      <v-text-field
        v-model="person.personName"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="person.personSurname"
        :counter="15"
        :rules="surnameRules"
        label="Surname"
        required
      ></v-text-field>

      <v-select
        v-model="person.personArea"
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
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate(person)"
      >
        Add Information
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset">
        Reset Information</v-btn
      >
    </v-form></v-col
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPersonInfo } from "@/services/models/IPerson-info.model";
@Component({
  components: {},
})
export default class AddPerson extends Vue {
  @Prop({ required: true }) readonly persons!: any;
  person: IPersonInfo = {
    personId: this.$store.state.staffInformation.length,
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
  checkbox = false;

  validate(item: IPersonInfo) {
    console.log(item);
    if (
      item.personName !== null &&
      item.personSurname !== null &&
      this.checkbox !== true
    ) {
      (this.dialog = false), console.log("error");
    } else {
      this.persons.push(this.person);
      this.person = {
        personId: 0,
        personName: "",
        personSurname: "",
        personArea: true,
        personIsWork: true,
        personExtraWork: 0,
      };

      (this.$refs as { form: HTMLFormElement }).form.validate();
      this.dialog = true;
    }
  }
  reset() {
    (this.$refs as { form: HTMLFormElement }).form.reset();
  }
}
</script>

<style scoped lang="scss"></style>
