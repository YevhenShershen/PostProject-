<template>
  <div>
    <h2>{{ category }}</h2>
    <WebContent :categoryList="getWebPagesList(category)" />
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
  @Prop({ required: true }) readonly category!: any;
}
</script>
<style lang="scss" scoped></style>
