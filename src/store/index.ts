import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    areas: ["absence", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    staffInformation: [
      {
        name: "Name1",
        surname: "Surname1",
        area: "1",
        isHaveArea: true,
        isActive: true,
        extraHours: "",
      },
      {
        name: "Name2",
        surname: "Surname2",
        area: "2",
        isHaveArea: true,
        isActive: true,
        extraHours: "",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {},
});
