import { RootState, GetEmployee } from "@/store/types";
import { GetterTree, ActionTree, Module, MutationTree } from "vuex";

export const state: GetEmployee = {
  employee: null,
};

const URL = "https://jsonplaceholder.typicode.com/users";
export const actions: ActionTree<GetEmployee, RootState> = {
  LOAD_EMPLOYEE({ commit }, id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => {
        commit("SET_EMPLOYEE", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export const mutations: MutationTree<GetEmployee> = {
  SET_EMPLOYEE(state, employee) {
    state.employee = employee;
  },
};
export const getters: GetterTree<GetEmployee, RootState> = {
  GET_EMPLOYEE(state) {
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
