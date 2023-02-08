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
  getEmployees(state) {
    return state.employees;
  },
  getEmployeeById: (state) => (id: any) => {
    return state.employees.find((employee) => employee.id === id);
  },
  getEmployee(_, getters) {
    console.log(getters.getEmployeeId);
    return getters.getEmployeeId;
  },
};
export const employees: Module<Employees, RootState> = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
