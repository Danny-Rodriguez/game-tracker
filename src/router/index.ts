import { createRouter, createWebHistory } from 'vue-router'
import GameList from '../components/GameList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GameList,
    },
  ],
})

export default router
