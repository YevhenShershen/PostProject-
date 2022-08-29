<template>
  <v-row class="text-center">
    <v-col>
      <div class="areas">test</div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PersonStatistic from "@/components/PersonStatistic.vue";
@Component({
  components: {
    PersonStatistic,
  },
})
export default class Areas extends Vue {
  protected area: any = [
    { area: 1, areaStaff: "Yevhen Shershen", isActive: true },
    { area: 2, areaStaff: "Yevhen Shershen2", isActive: true },
  ];

  public menuSections: any = [
    { title: "Informacja o rajonach", showRajonStatistic: false },
    { title: "Informacja o personale", showPersonalStatistic: false },
    { title: "Ogólna statystyka", showStatistic: false },
  ];
  public showStatisticList(te: boolean): boolean {
    return !te;
  }
}
</script>

<style scoped lang="scss"></style>
