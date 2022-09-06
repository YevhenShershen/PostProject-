<template>
  <v-row>
    <AddPerson :persons="persons"></AddPerson>
    <ChangeInfoPerson :persons="persons"></ChangeInfoPerson>
    <PersonInformation :persons="persons"></PersonInformation>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ChangeInfoPerson from "@/components/workdesk/ChangeInfoPerson.vue";
import AddPerson from "@/components/workdesk/AddPerson.vue";
import PersonInformation from "@/components/workdesk/PersonInformation.vue";
@Component({
  components: {
    ChangeInfoPerson,
    AddPerson,
    PersonInformation,
  },
})
export default class WorkDesk extends Vue {
  public persons = this.$store.state.staffInformation;
}
</script>

<style scoped lang="scss"></style>
