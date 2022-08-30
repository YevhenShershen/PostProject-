<template>
  <v-row>
    <AddPerson></AddPerson>
    <ChangeInfoPerson></ChangeInfoPerson>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChangeInfoPerson from "@/components/workdesk/ChangeInfoPerson.vue";
import AddPerson from "@/components/workdesk/AddPerson.vue";
@Component({
  components: {
    ChangeInfoPerson,
    AddPerson,
  },
})
export default class WorkDesk extends Vue {
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
