<template>
  <div>
    <router-link
      v-if="isLink"
      :to="{
        name: 'PersonInfo',
        params: {
          id: employee.id,
        },
      }"
    >
      <CardContent :employee="employee" />
    </router-link>
    <CardContent v-else :employee="employee" />
  </div>
</template>

<script lang="ts">
import { Employee } from "@/store/types";
import { Vue, Component, Prop } from "vue-property-decorator";
import CardContent from "@/components/about-us/CardContent.vue";

@Component({
  components: { CardContent },
})
export default class Card extends Vue {
  @Prop({ required: true }) readonly employee!: Employee;
  @Prop({ required: false, default: false }) isLink!: boolean;
}
</script>
