import { RootState, Employees } from "@/store/types";
import { ActionTree, Module, MutationTree } from "vuex";

export const state: Employees = {
  employees: [],
};

const URL = "https://jsonplaceholder.typicode.com/users";
export const actions: ActionTree<Employees, RootState> = {
  loadEmployeesList({ commit }) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        commit("updateEmployees", data);
        return data;
      });
  },
};
export const mutations: MutationTree<Employees> = {
  updateEmployees(state, employees) {
    state.employees = employees;
  },
};
export const employees: Module<Employees, RootState> = {
  state,
  actions,
  namespaced: true,
};
