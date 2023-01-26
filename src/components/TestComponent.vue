<template>
  <div>
    <h1>Test Component</h1>
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
    <h1>{{ todos2 }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Todo } from "@/store/todos/types";
import { State, Getter, Mutation, Action } from "vuex-class";
@Component
export default class TestComponent extends Vue {
  @State("todos") todos2!: Todo[];
  @Getter todos!: Todo[];
  @Getter dones!: Todo[];
  @Mutation addTodo: any;
  @Mutation toggleTodo: any;
  @Action addTodoAsync: any;
  newTodo: Todo = {
    text: "",
    checked: false,
  };
  id = "1";
}
</script>

<style scoped lang="scss"></style>
