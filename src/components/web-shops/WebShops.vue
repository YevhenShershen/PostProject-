<template>
  <div>
    <div class="d-flex">
      <h1 class="d-flex">WEB SHOPS LIST</h1>
      <v-spacer></v-spacer>
      <span class="d-flex">
        włączyć / wyłączyć polubienie&ensp;
        <v-switch
          class="mt-0"
          color="indigo"
          value="indigo"
          hide-details
          @click="toggleActiveLIkes()"
        ></v-switch>
      </span>
    </div>

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
