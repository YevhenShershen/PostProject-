import { GetterTree, MutationTree, Module } from "vuex";
import { RootState, LoginState } from "./types";
import { Store } from "vuex";
const state: LoginState = {
  user: "",
  IsLoggedIn: false,
};
const mutations: MutationTree<LoginState> = {
  login(state) {
    state.IsLoggedIn = true;
    state.user = "ALex";
  },
};
export const login: Module<LoginState, RootState> = {
  state,
  mutations,
  namespaced: true,
};
export function load(store: Store<any>) {
  store.registerModule("login", login);
}
