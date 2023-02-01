import { ActionTree } from "vuex";
import { IPersonInfo } from "@/services/models/IPerson-info.model";

const URL = "https://jsonplaceholder.typicode.com/users";
export const actions: ActionTree<IPersonInfo[], any> = {
  loadEmployeesList(): Promise<Array<IPersonInfo>> {
    return fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // commit("SET_EMPLOYEES_LIST", data);
        return data;
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  },
};
