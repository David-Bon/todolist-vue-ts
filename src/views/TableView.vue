<template>
  <div class="bg-white shadow-md rounded !p-6 w-full">
    <v-data-table :headers="headers" :items="tasks" item-value="id" class="elevation-1">
      <template #item.done="{ item }">
        {{ item.done }}
      </template>

      <template #item.actions="{ item }">
        <v-btn icon @click="toggleTask(item.id)">
          {{ item.done ? '🔄' : '✅' }}
        </v-btn>
        <v-btn icon @click="removeTask(item.id)">
          {{ '🗑️' }}
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useTodoStore } from '../stores'

const store = useTodoStore()

const { tasks } = storeToRefs(store)
const { toggleTask, removeTask } = store

const headers = computed(() => [
  { title: 'id', key: 'id' },
  { title: 'Text', key: 'text' },
  { title: 'Is completed', key: 'done', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false },
])
</script>
