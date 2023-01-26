import { GetterTree, MutationTree } from "vuex";
import { LoginState } from "./types";
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
export const login = {
  state,
  mutations,
};
