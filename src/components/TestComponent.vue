<template>
  <div>
    <h1 class="test-title">Test Component</h1>
    <div v-if="login">
      <h2>Login</h2>
      <button v-if="!login.IsLoggedIn" @click="loginMutation">Login</button>
      <p v-else>Hello{{ login.user }}</p>
    </div>
    <div>
      <h1>Todos</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.text">
          <input
            type="checkbox"
            :checked="todo.checked"
            @change="toggleTodo(todo)"
          />
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Dones</h1>
      <ul>
        <li v-for="done in dones" :key="done.text">
          <input
            type="checkbox"
            :checked="done.checked"
            @change="toggleTodo(done)"
          />
          {{ done.text }}
        </li>
      </ul>
    </div>
    <p>
      Add todo:
      <input
        type="text"
        placeholder="some text"
        v-model="newTodo.text"
        @keyup.enter="addTodo(newTodo)"
      />
    </p>
    <p>
      Add todo Async:
      <input
        type="text"
        placeholder="some text"
        v-model="id"
        @keyup.enter="addTodoAsync(id)"
      />
    </p>
    <div>
      <h1>{{ dones }}</h1>
      <h1>Count: {{ count.count }}</h1>
      <button class="primary" @click="countIcrement">Count Increment</button>
      <h2>{{ employees }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Todo, LoginState, Count, Employees } from "@/store/types";
import { State, Getter, Mutation, Action, namespace } from "vuex-class";

const TodoGetter = namespace("todos", Getter);
const TodoMutation = namespace("todos", Mutation);
const TodoAction = namespace("todos", Action);
const LoginMutation = namespace("login", Mutation);
const CountMutation = namespace("count", Mutation);
@Component
export default class TestComponent extends Vue {
  @State employees!: Employees;
  @State count!: Count;
  @CountMutation countIcrement: any;
  @State login!: LoginState;
  @TodoGetter todos!: Todo[];
  @TodoGetter dones!: Todo[];
  @LoginMutation("login") loginMutation: any;
  @TodoMutation addTodo: any;
  @TodoMutation toggleTodo: any;
  @TodoAction addTodoAsync: any;
  newTodo: Todo = {
    text: "",
    checked: false,
  };
  id = "1";
}
</script>

<style scoped lang="scss">
// .test-title {
//   color: $buttonAgree;
// }
</style>
