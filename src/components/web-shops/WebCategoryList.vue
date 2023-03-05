<template>
  <div>
    <h2>{{ category[0].toUpperCase() + category.slice(1) }}</h2>
    <WebContent :categoryList="getWebPagesList(category)" />
    <v-divider></v-divider>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
import WebContent from "./WebContent.vue";
@Component({
  components: { WebContent },
  computed: {
    ...mapGetters({
      getWebPagesList: "websList/GET_WEB_PAGES_LIST",
    }),
  },
})
export default class WebCategoryList extends Vue {
  @Prop({ required: true }) readonly category!: string;
}
</script>
<style lang="scss" scoped></style>
