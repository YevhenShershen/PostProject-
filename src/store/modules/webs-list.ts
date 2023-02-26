import { RootState, IWebsList } from "@/store/types";
import { GetterTree, Module, MutationTree } from "vuex";
import categories from "@/services/enums/categories";
export const state: IWebsList = {
  webPagesList: [
    {
      webPageName: "google.com",
      category: categories.INFORMATION_PAGES,
      likes: 4,
    },
    {
      webPageName: "vue.js",
      category: categories.INFORMATION_PAGES,
      likes: 0,
    },
    {
      webPageName: "gov.pl",
      category: categories.INFORMATION_PAGES,
      likes: 22,
    },
    {
      webPageName: "readymag.com",
      category: categories.CARD_WEBSITE,
      likes: 43,
    },
    {
      webPageName: "law.stanford.edu",
      category: categories.CARD_WEBSITE,
      likes: 114,
    },
    {
      webPageName: "ecoshape.org",
      category: categories.CARD_WEBSITE,
      likes: 14,
    },
    {
      webPageName: "allegro.pl",
      category: categories.ONLINE_SHOPS,
      likes: 23,
    },
    {
      webPageName: "amazon.pl",
      category: categories.ONLINE_SHOPS,
      likes: 2,
    },
    {
      webPageName: "store.playstation.com",
      category: categories.ONLINE_SHOPS,
      likes: 112,
    },
  ],
};

export const mutations: MutationTree<IWebsList> = {
  // setEmployees(state, employees) {
  // },
};
export const getters: GetterTree<IWebsList, RootState> = {
  GET_WEB_PAGES_LIST: (state) => (category: string) => {
    return state.webPagesList.filter((element) => element.category == category);
  },
};
export const websList: Module<IWebsList, RootState> = {
  state,
  getters,
  mutations,
  namespaced: true,
};
