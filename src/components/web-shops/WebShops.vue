<template>
  <div>
    <h1>WEB SHOPS LIST</h1>
    <WebCategoryList
      v-for="(category, index) in categories"
      :category="category"
      :key="`${index}-web-category`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WebCategoryList from "./WebCategoryList.vue";
import categories from "@/services/enums/categories";
@Component({
  components: { WebCategoryList },
})
export default class WebShops extends Vue {
  public categories = categories;
}
</script>
<style lang="scss" scoped></style>
