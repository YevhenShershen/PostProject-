import { GetterTree, Module } from "vuex";
import { RootState, Navigations } from "@/store/types";
const state: Navigations = {
  navigations: [
    {
      title: "Strona główna",
      name: "MainPage",
      services: true,
    },
    {
      title: "Strony internetowe",
      name: "AboutUs",
      services: true,
    },

    {
      title: "Sklepy internetowe",
      name: "/web-shops",
      services: true,
    },
    {
      title: "Naprawa, modernizacja stron",
      name: "/repair-pages",
      services: true,
    },
    {
      title: "O nas",
      name: "AboutUs",
      services: false,
    },
    {
      title: "Kontakt",
      name: "/contact",
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
};
export const navigation: Module<Navigations, RootState> = {
  state,
  getters,
  namespaced: true,
};
