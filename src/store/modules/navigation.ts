import { GetterTree, Module } from "vuex";
import { RootState, Navigations } from "@/store/types";
const state: Navigations = {
  navigations: [
    {
      title: "Strona główna",
      name: "MainPage",
      services: false,
    },
    {
      title: "Strony internetowe",
      name: "WebPages",
      services: true,
    },

    {
      title: "Sklepy internetowe",
      name: "WebShops",
      services: true,
    },
    {
      title: "Naprawa, modernizacja stron",
      name: "RepairPages",
      services: true,
    },
    {
      title: "Usługi",
      name: "Services",
      services: false,
    },
    {
      title: "O nas",
      name: "AboutUs",
      services: false,
    },
    {
      title: "Kontakt",
      name: "Contact",
      services: false,
    },
    {
      title: "Login",
      name: "Login",
      services: false,
    },
    {
      title: "Testowy Component",
      name: "TestComponent",
      services: false,
    },
  ],
};
export const getters: GetterTree<Navigations, RootState> = {
  services: (state) =>
    state.navigations.filter((navigation) => navigation.services),
  mainNavigation: (state) =>
    state.navigations.filter((navigation) => !navigation.services),
};
export const navigation: Module<Navigations, RootState> = {
  state,
  getters,
  namespaced: true,
};
