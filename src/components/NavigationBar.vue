<template>
  <v-card>
    <v-tabs v-model="activeTab" bg-color="teal-darken-3" slider-color="teal-lighten-3" show-arrows>
      <v-tab
        v-for="(route, index) in routes"
        :key="index"
        :value="route.name"
        @click="goTo(route.path)"
      >
        {{ route.name }}
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

import { routes } from '../router'

const route = useRoute()
const router = useRouter()

const activeTab = ref(route.name as string)

watch(
  () => route.name,
  newName => {
    activeTab.value = newName as string
  }
)

const goTo = (path: string) => {
  router.push(path)
}
</script>
