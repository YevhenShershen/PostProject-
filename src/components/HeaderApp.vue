<template>
  <v-app-bar app color="primary" dense dark>
    <v-row class="d-flex justify-center"
      ><v-col cols="10" class="d-flex">
        <v-toolbar-title>{{ companyInformation.name }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="header_menu">
          <router-link
            class="text-decoration-none"
            v-for="(link, index) in GET_MAIN_NAVIGATION"
            :key="`${index}-header-link`"
            :to="{ name: link.name }"
          >
            <v-btn text> {{ link.title }}</v-btn></router-link
          >
        </div>
        <!-- Mobile Menu -->
        <template>
          <div class="text-center header_mobile-menu">
            <v-menu>
              <template v-slot:activator="{ on: menu, attrs }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn text v-bind="attrs" v-on="{ ...tooltip, ...menu }"
                      ><v-app-bar-nav-icon></v-app-bar-nav-icon
                    ></v-btn>
                  </template>
                  <span>Menu</span>
                </v-tooltip>
              </template>
              <v-list class="list header_mobile-menu">
                <v-list-item
                  v-for="(item, index) in GET_MAIN_NAVIGATION"
                  :key="`${index}-header-link`"
                >
                  <v-list-item-title>
                    <router-link
                      class="text-decoration-none"
                      :to="{ name: item.name }"
                    >
                      {{ item.title }}</router-link
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import { Navigation } from "@/store/types";
import { ICompanyInformation } from "@/store/types";
import { mapGetters } from "vuex";
const MainNavigationGetter = namespace("navigation", Getter);
@Component({
  computed: {
    ...mapGetters({
      companyInformation: "companyInformation/COMPANY_INFORMATION",
    }),
  },
})
export default class HeaderApp extends Vue {
  @MainNavigationGetter GET_MAIN_NAVIGATION!: Navigation[];
  public companyInformation!: ICompanyInformation;
}
</script>
<style lang="scss" scoped>
@media (max-width: 1263px) {
  .header_menu {
    display: none;
  }
}
@media (min-width: 1263px) {
  .header_mobile-menu {
    display: none;
  }
}
.list {
  width: 100%;
}
</style>
