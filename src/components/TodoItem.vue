<template>
  <li class="flex items-center justify-between bg-gray-50 px-3 py-2 rounded shadow-sm">
    <span
        @click="$emit('toggle')"
        :class="[
        'cursor-pointer transition-colors',
        task.done ? 'line-through text-green-500' : 'text-gray-800 hover:text-blue-600'
      ]"
    >
      {{ task.text }}
    </span>
    <button
        @click="$emit('remove')"
        class="text-red-500 hover:text-red-700 hover:scale-110 active:scale-90 transition-transform font-bold"
    >
      ✕
    </button>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  task: {
    text: string;
    done: boolean;
  };
}>();
</script>
