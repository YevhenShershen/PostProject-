//Store
export interface TodoState {
  todos: Todo[];
}
export interface LoginState {
  user: string;
  IsLoggedIn: boolean;
}
//Models todo
export interface Todo {
  text: string;
  checked: boolean;
}
