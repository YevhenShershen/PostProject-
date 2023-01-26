import { State, Todo } from "./types";
import { GetterTree, MutationTree, ActionTree } from "vuex";
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
export const actions: ActionTree<State, any> = {
  addTodoAsync({ commit }, id) {
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((data) => data.json())
      .then((item) => {
        const todo: Todo = {
          checked: false,
          text: item.title,
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
};
