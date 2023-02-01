import { GetterTree, Module } from "vuex";
import { RootState, Navigations } from "@/store/types";
const state: Navigations = {
  navigations: [
    {
      label: "Strony internetowe",
      url: "/web-pages",
      services: true,
    },

    {
      label: "Sklepy internetowe",
      url: "/web-shops",
      services: true,
    },
    {
      label: "Naprawa, modernizacja stron",
      url: "/repair-pages",
      services: true,
    },
    {
      label: "O nas",
      url: "/about-us",
      services: false,
    },
    {
      label: "Kontakt",
      url: "/contact",
      services: false,
    },
    {
      label: "Login",
      url: "/login",
      services: false,
    },
    {
      label: "TestComponent",
      url: "/work-desk",
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
