export interface RootState {
  navigations: Navigations;
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
  label: string;
  url: string;
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
