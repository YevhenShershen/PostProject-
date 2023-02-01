import { Module } from "vuex";
import { GetterTree } from "vuex";
import { actions } from "@/store/employees/actions";
import { IPersonInfo } from "@/services/models/IPerson-info.model";
const state: any = {
  employees: [],
};
export const SET_EMPLOYEES_LIST: GetterTree<any, any> = {
  employees: (state) => state,
};
export const employees: Module<IPersonInfo[], any> = {
  state,
  actions,
};
