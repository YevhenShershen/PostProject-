import { RootState, IWebsList } from "@/store/types";
import { GetterTree, Module, MutationTree } from "vuex";
import categories from "@/services/enums/categories";
export const state: IWebsList = {
  webPagesList: [
    {
      webPageName: "https://google.com/",
      category: categories.INFORMATION_PAGES,
      likes: 4,
    },
    {
      webPageName: "https://vuejs.org/",
      category: categories.INFORMATION_PAGES,
      likes: 0,
    },
    {
      webPageName: "https://gov.pl/",
      category: categories.INFORMATION_PAGES,
      likes: 22,
    },
    {
      webPageName: "https://readymag.com/",
      category: categories.CARD_WEBSITE,
      likes: 43,
    },
    {
      webPageName: "https://law.stanford.edu/",
      category: categories.CARD_WEBSITE,
      likes: 114,
    },
    {
      webPageName: "https://ecoshape.org/",
      category: categories.CARD_WEBSITE,
      likes: 14,
    },
    {
      webPageName: "https://allegro.pl/",
      category: categories.ONLINE_SHOPS,
      likes: 23,
    },
    {
      webPageName: "https://www.amazon.pl/",
      category: categories.ONLINE_SHOPS,
      likes: 2,
    },
    {
      webPageName: "https://store.playstation.com/",
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
