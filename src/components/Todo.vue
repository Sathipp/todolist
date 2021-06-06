<template>
  <div class="bg-white h-72 w-64 p-4 rounded-xl flex-row hover:shadow">
    <div v-if="!todo_prop">
      <input type="text" v-model="new_topic" v-on:keyup.enter="handleTopicEnter" class="border-2 rounded-lg border-gray focus:outline-none"/>
    </div>
    <div v-if="todo_prop" class="text-lg font-bold text-blue">
      <input type="checkbox" v-model="todo_data.topic.check" v-on:change="handleDataUpdate"/>
      <a :class="{'line-through': todo_data.topic.check}">{{todo_data.topic.title}}</a>
      <button @click="handleTopicDelete" class="bg-red-400 text-red-700 hover:bg-red-500 hover:text-red-900 text-sm px-3 rounded-full focus:outline-none float-right">
        x
      </button>
    </div>
    <div v-if="todo_prop" class="pl-3 flex-col">
      <ul class="sublist">    
        <li :key="todo" v-for="todo in todo_data.todos">
          <input type="checkbox" v-model="todo.check" v-on:change="handleDataUpdate"/> 
          <a :class="{'line-through': todo.check}">{{todo.title}}</a>
          <button @click="handleTodoDelete(todo)" class="bg-red-400 text-red-700 hover:bg-red-500 hover:text-red-900 text-sm px-3 rounded-full focus:outline-none float-right">
            x
          </button>
        </li>
        <li v-if="show_new_todo_flag">
          <input type="text" v-model="new_todo" v-on:keyup.enter="handleTodoEnter" class="border-2 rounded-lg border-gray focus:outline-none"/>
        </li>
        <li>
          <button @click="handleAdd" class="bg-green-400 text-green-700 hover:bg-green-500 hover:text-green-900 text-sm px-3 rounded-full focus:outline-none">
            +
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo_data: {
          topic: {title: "", check: false},
          todos: []
        },
      new_topic: "",
      new_todo: "",
      show_new_todo_flag: false,
    }
  },
  name: 'Todo',
  props: {
    todo_prop: null
  },
  methods: {
    handleDataUpdate() {
      this.$emit("handleDataUpdate");
    },
    handleAdd() {
      this.show_new_todo_flag = true;
    },
    handleTopicEnter() {
      this.$emit("handleTopicEnter", this.new_topic);
      this.new_topic = "";
      this.handleDataUpdate()
    },
    handleTopicDelete() {
      this.$emit("handleTopicDelete", this.todo_data);
      this.handleDataUpdate()
    },
    handleTodoEnter() {
      this.todo_data.todos.push({title: this.new_todo, check: false});
      this.new_todo = "";
      this.show_new_todo_flag = false;
      this.handleDataUpdate()
    },
    handleTodoDelete(todo_to_delete) {
      var index = this.todo_data.todos.indexOf(todo_to_delete)
      if (index > -1) {
        this.todo_data.todos.splice(index, 1);
      }
      this.handleDataUpdate()
    }
  },
  mounted() {
    this.todo_data = this.todo_prop;
  }
}
</script>


<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,h2,h3,div{
  font-family: "Mitr", sans-serif;
}
</style>
