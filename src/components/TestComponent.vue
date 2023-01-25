<template>
  <div>
    <h1>Test Component</h1>
    <div>
      <h1>Todos</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.text">{{ todo.text }}</li>
      </ul>
    </div>
    <div>
      <h1>Dones</h1>
      <ul>
        <li v-for="todo in dones" :key="todo.text">{{ todo.text }}</li>
      </ul>
    </div>
    <input
      type="text"
      placeholder="some text"
      v-model="newTodo.text"
      @keyup.enter="addTodo(newTodo)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Todo } from "@/store/todos/types";
import { Getter, Mutation } from "vuex-class";
@Component
export default class TestComponent extends Vue {
  @Getter todos!: Todo[];
  @Getter dones!: Todo[];
  @Mutation addTodo: any;
  newTodo: Todo = {
    text: "",
    checked: false,
  };
}
</script>

<style scoped lang="scss"></style>
