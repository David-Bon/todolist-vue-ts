import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Table from '../views/TableView.vue'
import type { Component } from 'vue'

type route = {
  path: string
  name: string
  component: Component
}

export const routes: route[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/table', name: 'Table', component: Table },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
