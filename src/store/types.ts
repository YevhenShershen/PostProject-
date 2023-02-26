export interface RootState {
  navigations: Navigations;
  companyInformation: ICompanyInformation;
  employees: Employees;
  employee: GetEmployee;
  websList: IWebsList;
  //TEST COMPONENT
  count: Count;
  todos: TodoState;
  login: LoginState;
}
export interface UserState {
  name: string;
  street: string;
  number: string;
  city: string;
  code: string;
  country: string;
  phoneNumber: string;
  email: string;
  webPage: string;
  workTime: string;
}
export interface Navigation {
  title: string;
  name: string;
  services: boolean;
}
export interface Navigations {
  navigations: Navigation[];
}

//TEST COMPONENT
export interface Count {
  count: number;
}
export interface TodoState {
  todos: Todo[];
}
export interface LoginState {
  user: string;
  IsLoggedIn: boolean;
}
export interface Todo {
  text: string;
  checked: boolean;
}

export interface ICompanyInformation {
  name: string;
  street: string;
  number: string;
  city: string;
  code: string;
  country: string;
  phoneNumber: string;
  email: string;
  webPage: string;
  workTime: string;
}

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface Employees {
  employees: Employee[];
}
export interface GetEmployee {
  employee: Employee | null;
}

export interface IWebInfo {
  webPageName: string;
  category: string;
  likes: number;
}
export interface IWebsList {
  webPagesList: IWebInfo[];
}
