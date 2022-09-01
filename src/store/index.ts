import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    areas: ["absence", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    staffInformation: [
      {
        personId: 1,
        personName: "Name1",
        personSurname: "Surname1",
        personArea: 1,
        personIsWork: true,
        personExtraWork: "",
      },
      {
        personId: 2,
        personName: "Name2",
        personSurname: "Surname2",
        personArea: "2",
        personIsWork: true,
        personExtraWork: "",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});
