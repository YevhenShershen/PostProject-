//идея vuex в том что мы описываем всю бизнесс логику в vuex

import Vue from "vue";
import Vuex from "vuex";
import { IPersonInfo } from "@/services/models/IPerson-info.model";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    areas: ["absence", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

    staffInformation: [
      {
        personId: 1,
        personName: "Name1",
        personSurname: "Surname1",
        personArea: 1,
        personIsWork: true,
        personExtraWork: 33,
      },
      {
        personId: 2,
        personName: "Name2",
        personSurname: "Surname2",
        personArea: 3,
        personIsWork: false,
        personExtraWork: 22,
      },
      {
        personId: 4,
        personName: "dsaf",
        personSurname: "DAFSS",
        personArea: 2,
        personIsWork: false,
        personExtraWork: 222,
      },
    ],
  },

  // мутации это то как мы меняем состояние(а состояние это данные в state)
  mutations: {
    //только работа со стейтом
    removePerson(state, id: number) {
      return state.staffInformation.splice(id, 1);
    },
    changeWorkInfo(_, person: IPersonInfo) {
      return (person.personIsWork = !person.personIsWork);
    },
  },
  actions: {
    //любой ассинхроной штукой, если с запросами на сервере
  },
  modules: {
    //стор можем делить на разные чанки (чанки это )
  },
  getters: {
    //статическое поле что бы что то получить. разобраться
  },
});
