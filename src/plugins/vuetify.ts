import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: { primary: "#3f51b5", anchor: "#FF5252" },
      dark: {
        primary: "#34495E",
      },
    },
  },
});
