<template>
  <div class="font-bold text-2xl text-center pt-5 px-8">
    To do list!
    <!-- <button class="px-3 bg-gray text-indigo-500 rounded-full float-right hover:bg-gray-300 hover:text-indigo-700 focus:outline-none">
      add task
    </button> -->
  </div>
  <todo-list></todo-list>
</template>

<script>
import TodoList from './views/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,h2,h3,div{
  font-family: "Mitr", sans-serif;
}
</style>
