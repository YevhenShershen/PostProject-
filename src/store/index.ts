import Vue from "vue";
import Vuex from "vuex";
import { todos } from "@/store/todos/todos";
import { login } from "@/store/todos/login";
import { count } from "@/store/todos/count";
import { navigation } from "@/store/modules/navigation";
import { companyInformation } from "@/store/modules/company-information";
import { employees } from "@/store/modules/employees";
Vue.use(Vuex);

export const store = new Vuex.Store({
  mutations: {},
  modules: {
    todos,
    login,
    count,
    navigation,
    companyInformation,
    employees,
  },
});
