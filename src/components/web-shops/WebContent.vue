<template>
  <v-col>{{ categoryList }} </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class WebContent extends Vue {
  @Prop({ required: true }) readonly categoryList!: any[];
}
</script>
<style lang="scss" scoped></style>
