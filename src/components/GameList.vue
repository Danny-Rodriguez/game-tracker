<script setup lang="ts">
import { useGameStore } from '@/stores/games'
import GameCard from './GameCard.vue'
import type { GameStatus } from '@/types/game'

const store = useGameStore()
const statuses: GameStatus[] = ['Backlog', 'Now Playing', 'Finished']
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Game Tracker</h1>
    
    <div class="space-y-8">
      <div v-for="status in statuses" :key="status" class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">{{ status }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <GameCard
            v-for="game in store.getGamesByStatus(status)"
            :key="game.id"
            :game="game"
          />
        </div>
      </div>
    </div>
  </div>
</template>
