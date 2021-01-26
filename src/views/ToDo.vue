<template>
  <div>
    <TodoList v-bind:todos="todos" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TodoList from "@/components/TodoList.vue"; // @ is an alias to /src

@Options({
  components: {
    TodoList: TodoList,
  },
  data(): any {
    return {
      todos: [
        {
          title: "Todo A",
          project: "Project A",
          done: false,
        },
        {
          title: "Todo B",
          project: "Project B",
          done: true,
        },
        {
          title: "Todo C",
          project: "Project C",
          done: false,
        },
        {
          title: "Todo D",
          project: "Project D",
          done: false,
        },
      ],
    };
  },
})
export default class ToDo extends Vue {}
</script>
