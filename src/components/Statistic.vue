<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-row>
          <v-col class="d-flex justify-space-around">
            <v-btn
              depressed
              color="primary"
              v-for="(btn, index) in menuSections"
              :key="index"
              width=""
            >
              {{ btn.title }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Areas></Areas>
            <StaffInformation></StaffInformation>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <div>
          <p>STATISTIC</p>
          <h1>Counter: {{ $store.state.count }}</h1>
          <PersonStatistic
            :person="person1"
            v-for="person1 in $store.state.staffInformation"
            :key="person1"
          ></PersonStatistic>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonStatistic from "@/components/PersonStatistic.vue";
import Areas from "@/components/statistic/Areas.vue";
import StaffInformation from "@/components/statistic/StaffInformation.vue";
@Component({
  components: {
    PersonStatistic,
    Areas,
    StaffInformation,
  },
})
export default class Statistic extends Vue {
  public showRajonStatistic = false;
  public showPersonalStatistic = false;
  public showStatistic = false;
  protected area: any = [
    { area: 1, areaStaff: "Yevhen Shershen", isActive: true },
    { area: 2, areaStaff: "Yevhen Shershen2", isActive: true },
  ];
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
  public menuSections: any = [
    { title: "Informacja o rajonach" },
    { title: "Informacja o personale" },
    { title: "Ogólna statystyka" },
  ];
  public showStatisticList(te: boolean): boolean {
    return !te;
  }
}
</script>

<style scoped lang="scss"></style>
