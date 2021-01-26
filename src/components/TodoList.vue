<template>
  <div>
    <p>
      Completed Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === true;
        }).length
      }}
    </p>
    <p>
      Pending Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === false;
        }).length
      }}
    </p>

    <TodoItem
      class="todoItem"
      v-for="todo in todos"
      :todo="todo"
      :key="todo.title"
    />
  </div>
</template>

<script type="text/javascript">
import TodoItem from "./TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
};
</script>
<style scoped lang="scss">
.todoItem {
  margin: 10px 30px;
  padding: 15px;
  background: rgb(180, 180, 180);
  display: flex;
}
</style>
