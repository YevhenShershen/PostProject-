import { MutationTree, Module } from "vuex";
import { RootState, Count } from "@/store/types";
// import { Store } from "vuex";
const state: Count = {
  count: 0,
};
const mutations: MutationTree<Count> = {
  countIcrement(state) {
    state.count += 1;
  },
};
export const count: Module<Count, RootState> = {
  state,
  mutations,
  namespaced: true,
};
