import Vue from "vue";
import Vuex from "vuex";
import { companyInformation } from "@/store/company-information/company-information";
import { employees } from "@/store/employees/employees";
import { navigation } from "@/store/navigation/navigation";
import { todos } from "@/store/todos/todos";
import { login } from "@/store/todos/login";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { companyInformation, employees, navigation, todos, login },
});
