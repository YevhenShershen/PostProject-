<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-btn class="success" @click="calculated(num1, num2)">{{
          clickMe
        }}</v-btn>
        <p>{{ c }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) readonly msg!: string;

  protected name = "Jackson";
  public clickMe = "click me";
  public num1 = 1;
  public num2 = 2;
  public c: any = "";
  public calculated(a: number, b: number): number {
    console.log(a + b);
    return (this.c = a + b);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.test1 {
  background: red;
}
</style>
