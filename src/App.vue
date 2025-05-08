<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-4 text-center">My ToDo List</h1>
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoList from './components/TodoList.vue';
</script>
