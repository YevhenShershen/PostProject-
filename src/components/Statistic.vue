<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <div>
          <p>STATISTIC</p>
          <PersonStatistic
            :person="person1"
            v-for="person1 in infoAboutWorkers"
            :key="person1.personId"
          ></PersonStatistic>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonStatistic from "@/components/PersonStatistic.vue";
@Component({
  components: {
    PersonStatistic,
  },
})
export default class Statistic extends Vue {
  public infoAboutWorkers: any = [
    {
      personId: 1,
      personName: "John1",
      personSurname: "Konan1",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 2,
      personName: "John2",
      personSurname: "Konan2",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 3,
      personName: "John3",
      personSurname: "Konan3",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 4,
      personName: "John4",
      personSurname: "Konan4",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 5,
      personName: "John5",
      personSurname: "Konan5",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 6,
      personName: "John6",
      personSurname: "Konan6",
      personIsWork: true,
      personExtraWork: 0,
    },
    {
      personId: 7,
      personName: "John7",
      personSurname: "Konan7",
      personIsWork: true,
      personExtraWork: 0,
    },
  ];
}
</script>

<style scoped lang="scss"></style>
