<template>
  <div class="h-48 flex flex-wrap content-start">
    <div class="p-5" :key="todo" v-for="todo in todolist">
      <todo :todo_prop="todo" @handleTopicDelete="handleTopicDelete" @handleDataUpdate="handleDataUpdate"></todo>
    </div>
    <div class="p-5"><todo @handleTopicEnter="handleTopicEnter" @handleDataUpdate="handleDataUpdate"></todo></div>
  </div>
</template>

<script>
import Todo from "../components/Todo.vue";
const baseURL = "http://localhost:3000/data"
export default {
  components: {
    Todo
  },
  data() {
    return {
      todolist: []
      // todolist: [
      //   {
      //     topic: {title: "Topic #1", check: false},
      //     todos: [
      //       {title: "Todo #1", check: false},
      //       {title: "Todo #2", check: false},
      //     ]
      //   },
      //   {
      //     topic: {title: "Topic #2", check: true},
      //     todos: [
      //       {title: "Todo #3", check: true},
      //       {title: "Todo #4", check: false},
      //       {title: "Todo #5", check: true},
      //     ]
      //   },
      // ]
    }
  },
  methods: {
    handleTopicEnter(new_topic) {
      this.todolist.push({
          topic: {title: new_topic, check: false},
          todos: []
        });
    },
    handleTopicDelete(todo_data) {
      var index = this.todolist.indexOf(todo_data)
      if (index > -1) {
        this.todolist.splice(index, 1);
      }
    },
    handleDataUpdate() {
      fetch(`${baseURL}`, {
          method: "PUT",
          headers: {
              "Content-type": "application/json",
          },
          body: JSON.stringify({
            todolist: this.todolist
          }),
      });
    }
  },
  mounted() {
    fetch(`${baseURL}`).then(response => {
      return response.json();
    }).then(data => {
      this.todolist = data.todolist;
    });
  }
};
</script>