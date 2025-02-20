import { createRouter, createWebHistory } from 'vue-router'
import GameList from '../components/GameList.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/games',
      name: 'games',
      component: GameList,
    },
  ],
})

export default router
