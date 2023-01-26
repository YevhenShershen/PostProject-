import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { companyInformation } from "@/store/company-information/company-information";
import { employees } from "@/store/employees/employees";
import { navigation } from "@/store/navigation/navigation";
import { todos } from "@/store/todos/todos";
import { state, getters, mutations, actions } from "@/store/todos/todos";
Vue.use(Vuex);
const store: StoreOptions<any> = {
  state: {},
  modules: { companyInformation, employees, navigation, todos },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
