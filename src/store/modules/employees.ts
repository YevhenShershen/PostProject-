import { RootState, Employees } from "@/store/types";
import { GetterTree, ActionTree, Module, MutationTree } from "vuex";

export const state: Employees = {
  employees: [],
  employee: null,
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
  loadEmployee({ commit }, id = 1) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => data.json())
      .then((data) => {
        commit("updateEmployee", data);
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
  updateEmployee(state, employee) {
    state.employee = employee;
  },
};
export const getters: GetterTree<Employees, RootState> = {
  getEmployees(state) {
    return state.employees;
  },
  getEmployee(state) {
    return state.employee;
  },
};
export const employees: Module<Employees, RootState> = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
