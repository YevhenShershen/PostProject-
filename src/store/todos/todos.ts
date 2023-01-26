import { RootState, TodoState, Todo } from "./types";
import { GetterTree, MutationTree, ActionTree } from "vuex";
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
export const getters: GetterTree<TodoState, RootState> = {
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
  addTodoAsync({ commit, rootState }, id) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ": " + item.title,
        };
        commit("addTodo", todo);
      });
    // .catch((error) => {
    //   alert(error);
    // });
  },
};
export const todos = {
  state,
  getters,
  mutations,
  actions,
};
