<template>
  <v-row>
    <v-col
      class="web-content"
      v-for="(web, index) in categoryList"
      :key="`web-content_card-${index}`"
    >
      <div class="web-content_field">
        <div class="web-content_top">
          <a :href="web.webPageName">
            <img
              src="~@/assets/images/web-example.jpg"
              alt="web-page"
              class="web-content_photo"
            />
            <div class="web-content_description">
              Here we can write some description about our web-page
            </div>
          </a>
        </div>
        <div class="web-content_footer d-flex">
          <span class="web-content_name">{{ web.webPageName }}</span>
          <v-spacer></v-spacer>
          <span class="web-content_like">
            <button
              :disabled="activeLikes ? true : false"
              @click="$store.commit('websList/incrementLike', web.webPageName)"
            >
              <font-awesome-icon icon="fa-regular fa-thumbs-up" />
            </button>
            {{ web.likes }}</span
          >
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop, InjectReactive } from "vue-property-decorator";
import { IWebInfo } from "@/store/types";
@Component({})
export default class WebContent extends Vue {
  public a = true;
  @Prop({ required: true }) readonly categoryList!: IWebInfo[];
  @InjectReactive("key") public activeLikes!: boolean;
}
</script>
<style lang="scss" scoped>
.web-content {
  &_field {
    height: 420px;
    width: 350px;
    box-shadow: 5px 5px 20px black;
    overflow: hidden;
    border-radius: 3px;
  }
  &_top {
    position: relative;
  }
  &_photo {
    max-width: 100%;
    height: auto;
  }

  &_description {
    display: flex;
    text-align: center;
    align-items: center;
    height: 200px;
    width: 350px;
    padding: 6px;
    box-sizing: border-box;
    position: absolute;
    background: rgb(27, 27, 27, 0.5);
    color: white;
    font-size: 20px;
    visibility: hide;
    opacity: 0;
    bottom: 0;
  }

  &_footer {
    padding: 15px 10px;
  }

  &_name {
  }

  &_like {
  }
}
.web-content:hover .web-content_description {
  height: 220px;
  background: black;
  opacity: 0.9;
  visibility: visible;
}
</style>
