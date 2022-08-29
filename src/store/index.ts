import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    staffInformation: [
      {
        name: "Yevhen",
        surname: "Shershen",
        area: "1",
        isHaveArea: true,
        isActive: true,
        extraHours: "",
      },
      {
        name: "Dmytro",
        surname: "Shershen",
        area: "2",
        isHaveArea: true,
        isActive: true,
        extraHours: "",
      },
    ],
    areas: ["Area: 2", "Area: 3", "Area: 4", "Area: 5", "Area: 6", "Area: 7"],
  },
  mutations: {},
  actions: {},
  modules: {},
});
