<template>
  <div class="bg-white shadow-md rounded !p-6 w-full">
    <h1 class="text-2xl font-bold py-4 text-center text-black">My ToDo List</h1>
    <div class="flex gap-2 mb-4">
      <input
        v-model="newTask"
        @keyup.enter="handleAddTask"
        placeholder="Add a task..."
        class="flex-1 border rounded px-3 py-2 text-black"
      />
      <button
        @click="handleAddTask"
        class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded shadow hover:from-blue-600 hover:to-indigo-600 active:scale-95 transition-transform"
      >
        Add
      </button>
    </div>

    <ul class="space-y-2">
      <TodoItem v-for="task in tasks" :key="task.id" :task="task" @toggle="toggleTask(task.id)" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import TodoItem from '../components/TodoItem.vue'
import { useTodoStore } from '../stores'

const { tasks, toggleTask, addTask } = useTodoStore()
const newTask = ref<string>('')

function handleAddTask() {
  const isNewTaskValue = newTask.value.trim()
  if (isNewTaskValue) {
    addTask(newTask.value)
    //clear input value
    newTask.value = ''
  }
}
</script>
