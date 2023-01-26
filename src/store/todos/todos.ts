import { RootState, TodoState, Todo } from "./types";
import { GetterTree, MutationTree, ActionTree, Module } from "vuex";
type TodoGetter = GetterTree<TodoState, RootState>;
export const state: TodoState = {
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
export const getters: TodoGetter = {
  todos: (state, getters, rootState) =>
    state.todos.filter((todo) => !todo.checked),
  dones: (state) => state.todos.filter((todo) => todo.checked),
};
export const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    state.todos.push(newTodo);
  },
  toggleTodo(state, todo) {
    todo.checked = !todo.checked;
  },
};
export const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({ commit, dispatch, rootState }, id) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ": " + item.title,
        };
        commit("addTodo", todo);
        commit("sum", null, { root: true });
        dispatch("actionName", null, { root: true });
      });
    // .catch((error) => {
    //   alert(error);
    // });
  },
};
export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
