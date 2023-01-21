<!-- vue-property-decorator -->
<template>
  <div>
    <Description />
    <OurOffer />
    <OrderForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Description from "./main/Description.vue";
import OurOffer from "./main/OurOffer.vue";
import OrderForm from "./main/OrderForm.vue";
@Component({
  components: { Description, OurOffer, OrderForm },
})
export default class MainPage extends Vue {}
</script>
<style lang="scss" scoped></style>
