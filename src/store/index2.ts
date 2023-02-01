//идея vuex в том что мы описываем всю бизнесс логику в vuex
import Vue from "vue";
import Vuex from "vuex";
import { persons } from "./modules/persons";
import { companyInformation } from "./modules/company-information";
Vue.use(Vuex);

export default new Vuex.Store({
  //в state определяем данные которые будут у нас в приложении
  state: {
    servicesNav: [
      {
        label: "Strony internetowe",
        url: "/web-pages",
      },

      {
        label: "Sklepy internetowe",
        url: "/web-shops",
      },
      {
        label: "Naprawa, modernizacja stron",
        url: "/repair-pages",
      },
    ],
    infoNav: [
      {
        label: "O nas",
        url: "/about-us",
      },
      {
        label: "Kontakt",
        url: "/contact",
      },
      {
        label: "Login",
        url: "/login",
      },
      { label: "TestComponent", url: "/work-desk" },
    ],
  },

  // мутации это то как мы меняем состояние(а состояние это данные в state)
  mutations: {
    //только синхронные методы
    //функции которые изменяют store
    // removePerson(state, id: number) {
    //   return state.staffInformation.splice(id, 1);
    // },
    // changeWorkInfo(_, person: IPersonInfo) {
    //   return (person.personIsWork = !person.personIsWork);
    // },
    // receivingPersonInfo(state, person: IPersonInfo) {
    //   return (state.personInformation = person);
    // },
    // personInformation(state) {
    //   return state.personInformation;
    // },
  },
  actions: {
    //сделать сделаем функцию которая выполняет запросы с бекэнда
    //используем только асинхронные методы
  },
  modules: {
    //стор можем делить на разные чанки (чанки это )
    persons,
    companyInformation,
  },
  getters: {
    //трасформировать данные в store и получать их из store
  },
});
