import { RootState, Employees } from "@/store/types";
import { GetterTree, ActionTree, Module, MutationTree } from "vuex";

export const state: Employees = {
  employees: [],
};

const URL = "https://jsonplaceholder.typicode.com/users";
export const actions: ActionTree<Employees, RootState> = {
  loadEmployeesList({ commit }) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        commit("updateEmployees", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
export const mutations: MutationTree<Employees> = {
  updateEmployees(state, employees) {
    state.employees = employees;
  },
};
export const getters: GetterTree<Employees, RootState> = {
  EMPLOYEES(state) {
    return state.employees;
  },
};
export const employees: Module<Employees, RootState> = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
