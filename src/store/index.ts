import Vue from "vue";
import Vuex from "vuex";
import { companyInformation } from "@/store/company-information/company-information";
import { employees } from "@/store/employees/employees";
import { navigation } from "@/store/navigation/navigation";
import { todos } from "@/store/todos/todos";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    sum(state) {
      state.count += 1;
    },
  },
  modules: { todos },
});
// , companyInformation, employees, navigation
