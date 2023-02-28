import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store/index";
import vuetify from "./plugins/vuetify";
import "./styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(faUserSecret, faThumbsUp);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

const load = true;
if (load) {
  import("./store/todos/login").then(({ login }) => {
    store.registerModule("login", login);
  });
}
