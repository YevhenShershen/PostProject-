<template>
  <div>
    <h1 class="d-flex">
      WEB SHOPS LIST {{ activeLikes }}
      <v-switch
        color="indigo"
        value="indigo"
        hide-details
        @click="toggleActiveLIkes()"
      ></v-switch>
    </h1>

    <WebCategoryList
      v-for="(category, index) in categories"
      :category="category"
      :key="`${index}-web-category`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, ProvideReactive } from "vue-property-decorator";
import WebCategoryList from "./WebCategoryList.vue";
import categories from "@/services/enums/categories";
@Component({
  components: { WebCategoryList },
})
export default class WebShops extends Vue {
  @ProvideReactive("key") public activeLikes = true;
  public categories = categories;

  toggleActiveLIkes(): void {
    this.activeLikes = !this.activeLikes;
  }
}
</script>
<style lang="scss" scoped></style>
