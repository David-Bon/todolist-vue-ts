<template>
  <v-app>
    <v-main class="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <v-container style="height: 100vh;">
        <NavigationBar />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
</script>
