import { GetterTree, Module } from "vuex";
import { RootState, ICompanyInformation } from "@/store/types";
const state: ICompanyInformation = {
  name: "Shershen-IT",
  street: "Pikachu",
  number: "888",
  city: "New Star",
  code: "88-888",
  country: "Space",
  phoneNumber: "888 888 888",
  email: "shershen-it@gmail.com",
  webPage: "shershen-it.com",
  workTime: "Godziny pracy biura: 8:30 - 16:30",
};
export const getters: GetterTree<ICompanyInformation, RootState> = {
  COMPANY_INFORMATION(state) {
    return state;
  },
};
export const companyInformation: Module<ICompanyInformation, RootState> = {
  state,
  getters,
  namespaced: true,
};
