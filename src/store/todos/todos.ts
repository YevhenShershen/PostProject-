import { State } from "./types";
import { GetterTree, MutationTree } from "vuex";
export const state: State = {
  todos: [
    {
      text: "Buy milk",
      checked: false,
    },
    {
      text: "Go shopping",
      checked: true,
    },
    {
      text: "Get haircut",
      checked: false,
    },
  ],
};
export const getters: GetterTree<State, any> = {
  todos: (state) => state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};
export const mutations: MutationTree<State> = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
};
export const todos = {
  state,
};
