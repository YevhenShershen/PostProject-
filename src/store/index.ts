import Vue from "vue";
import Vuex from "vuex";
import { companyInformation } from "@/store/company-information/company-information";
import { employees } from "@/store/employees/employees";
import { todos } from "@/store/todos/todos";
import { login } from "@/store/todos/login";
import { count } from "@/store/todos/count";
import { navigation } from "@/store/modules/navigation";
Vue.use(Vuex);

export const store = new Vuex.Store({
  mutations: {},
  modules: { todos, login, count, navigation },
});
// todos, login, count,
// , companyInformation, employees, navigation
