<template>
  <v-app>
    <v-app-bar app color="primary" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        color="blue lighten-4"
        :to="link.url"
        >{{ link.label }}</v-btn
      >
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <!-- тут мы создаем таким образом контейнер и центрируем его-->
      <v-row no-gutters justify="center">
        <v-col cols="12" lg="11">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
          <strong>Our contact: shershen.yevhen@gmail.com</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  components: {},
  data: () => ({
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Login",
        url: "/login",
      },
      {
        label: "Signup",
        url: "/signup",
      },
      {
        label: "Work-desek",
        url: "/work-desk",
      },
      {
        label: "Statistic",
        url: "/statistic",
      },
    ],
  }),
});
</script>
