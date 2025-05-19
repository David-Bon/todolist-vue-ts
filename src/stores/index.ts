import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { v4 as generateUuid } from 'uuid'

export interface Task {
  id: string
  text: string
  done: boolean
}

const LOCAL_STORAGE_KEY = 'todo-tasks'

export const useTodoStore = defineStore('todo', () => {
  // Load tasks from localStorage
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
  const tasks = ref<Task[]>(stored ? JSON.parse(stored) : [])

  function addTask(text: string) {
    tasks.value.push({ id: generateUuid(), text, done: false })
  }

  function toggleTask(id: string) {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.done = !task.done
    }
  }

  function removeTask(id: string) {
    tasks.value = tasks?.value?.filter?.(task => task.id !== id)
  }

  // Watch for changes and save to localStorage
  watch(
      tasks,
      (newTasks) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
      },
      { deep: true }
  )

  return {
    tasks,
    addTask,
    toggleTask,
    removeTask,
  }
})
