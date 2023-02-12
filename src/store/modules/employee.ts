import { RootState, GetEmployee } from "@/store/types";
import { GetterTree, ActionTree, Module, MutationTree } from "vuex";

export const state: GetEmployee = {
  employee: null,
};

const URL = "https://jsonplaceholder.typicode.com/users";
export const actions: ActionTree<GetEmployee, RootState> = {
  async loadEmployee({ commit }, id) {
    try {
      const res = await fetch(`${URL}/${id}`);
      const data = await res.json();
      const status = await res.status;
      if (status !== 200) {
        // TODO: Implement logger ;)
        console.error("Error during loadEmployee: Wrong status code");
        return;
      }
      commit("SET_EMPLOYEE", data);
    } catch (error) {
      // TODO: Implement logger ;)
      console.error(error);
    }
  },
};
export const mutations: MutationTree<GetEmployee> = {
  SET_EMPLOYEE(state, employee) {
    state.employee = employee;
  },
};
export const getters: GetterTree<GetEmployee, RootState> = {
  getEmployee(state) {
    return state.employee;
  },
};
export const employee: Module<GetEmployee, RootState> = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
