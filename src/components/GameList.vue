<script setup lang="ts">
import { useGameStore } from '@/stores/games'
import GameCard from './GameCard.vue'
import type { GameStatus } from '@/types/game'

const store = useGameStore()
const statuses: GameStatus[] = ['Backlog', 'Now Playing', 'Finished']
</script>

<template>
  <div class="py-8 text-white">
    <h1 class="text-3xl font-bold mb-8 pb-8 text-center font-press-start tracking-normal">Game Tracker</h1>

    <div class="space-y-8">
      <div v-for="status in statuses" :key="status" class="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
        <h2 class="text-xl font-semibold mb-4 pb-6 text-center font-press-start tracking-normal">{{ status }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <GameCard v-for="game in store.getGamesByStatus(status)" :key="game.id" :game="game" />
        </div>
      </div>
    </div>
  </div>
</template>
