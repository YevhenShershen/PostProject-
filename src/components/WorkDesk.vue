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
export default class WorkDesk extends Vue {}
</script>

<style scoped lang="scss"></style>
