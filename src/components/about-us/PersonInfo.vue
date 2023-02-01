<template>
  <v-col>
    <p>{{ employee }}</p>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class PersonInfo extends Vue {
  @Prop({ required: true }) readonly employee!: any;
}
</script>
<style lang="scss" scoped></style>
