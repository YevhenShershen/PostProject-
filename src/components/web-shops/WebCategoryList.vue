<template>
  <div>
    <h2>{{ category }}</h2>
    <v-row> <WebContent :categoryList="getWebPagesList(category)" /> </v-row>
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
