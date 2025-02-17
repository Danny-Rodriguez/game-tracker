import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Game, GameStatus } from '@/types/game'
import { INITIAL_GAMES } from '@/types/game'

const STORAGE_KEY = 'game-tracker-games'

export const useGameStore = defineStore('games', () => {
  const games = ref<Game[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(INITIAL_GAMES))
  )

  // Save games to localStorage whenever they change
  function saveGames() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(games.value))
  }

  function updateGameStatus(gameId: string, newStatus: GameStatus) {
    const game = games.value.find(g => g.id === gameId)
    if (game) {
      game.status = newStatus
      saveGames()
    }
  }

  function getGamesByStatus(status: GameStatus) {
    return games.value.filter(game => game.status === status)
  }

  return {
    games,
    updateGameStatus,
    getGamesByStatus
  }
})
