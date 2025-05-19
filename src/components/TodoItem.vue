<template>
  <li class="flex items-center justify-between bg-gray-50 px-3 py-2 rounded shadow-sm">
    <span
      @click="$emit('toggle')"
      :class="[
        'cursor-pointer transition-colors',
        task.done ? 'line-through text-green-500' : 'text-gray-800 hover:text-blue-600',
      ]"
    >
      {{ task.text }}
    </span>
    <button
      @click="$emit('toggle')"
      class="text-red-500 hover:text-red-700 hover:scale-110 active:scale-90 focus:!outline-none transition-transform font-bold"
    >
      {{ task.done ? '🔄' : '✅' }}
    </button>
  </li>
</template>

<script setup lang="ts">
import type {Task} from "../stores";

defineProps<{
  task: Task
}>()
</script>
