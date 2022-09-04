<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <div>
          <p>{{ person.personName }}</p>
          <v-btn class="success" @click="calculated()">Mixin1</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { IPersonInfo } from "@/services/models/IPerson-info.model";
import { Mixins } from "vue-property-decorator";
import ItemMixin from "@/mixins/item.mixin";
@Component({})
export default class PersonStatistic extends Mixins(ItemMixin) {
  @Prop({ required: true }) readonly person!: IPersonInfo;
  public calculated() {
    return console.log(this.sumTwoNumbers());
  }
}
</script>
<style scoped lang="scss"></style>
