//Store
export interface State {
  todos: Todo[];
}

//Models todo
export interface Todo {
  text: string;
  checked: boolean;
}
