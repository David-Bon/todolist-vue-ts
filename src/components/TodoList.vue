<template>
  <div>
    <div class="flex gap-2 mb-4">
      <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add a task..."
          class="flex-1 border rounded px-3 py-2"
      />
      <button
          @click="addTask"
          class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded shadow hover:from-blue-600 hover:to-indigo-600 active:scale-95 transition-transform"
      >
        Add
      </button>
    </div>

    <ul class="space-y-2">
      <TodoItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @remove="removeTask(index)"
          @toggle="toggleTask(index)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import TodoItem from './TodoItem.vue';

interface Task {
  text: string;
  done: boolean;
}

const LOCAL_STORAGE_KEY = 'todo-tasks';

const tasks = ref<Task[]>([]);
const newTask = ref<string>('');

// preload data from LocalStorage
onMounted(() => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (saved) {
    tasks.value = JSON.parse(saved);
  }
});

// save data to LocalStorage on change
watch(tasks, (newVal) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newVal));
}, { deep: true });

function addTask() {
  if (newTask.value.trim()) {
    tasks.value.push({ text: newTask.value, done: false });
    newTask.value = '';
  }
}

function removeTask(index: number) {
  tasks.value.splice(index, 1);
}

function toggleTask(index: number) {
  tasks.value[index].done = !tasks.value[index].done;
}
</script>
