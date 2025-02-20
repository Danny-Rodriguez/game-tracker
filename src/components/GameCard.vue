<script setup lang="ts">
import type { Game, GameStatus } from '@/types/game'
import { useGameStore } from '@/stores/games'

defineProps<{
  game: Game
}>()

const store = useGameStore()

const statuses: GameStatus[] = ['Backlog', 'Now Playing', 'Finished']
</script>

<template>
  <div class="bg-white/90 backdrop-blur-sm text-black rounded-lg shadow-lg overflow-hidden">
    <img :src="game.image" :alt="game.title" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="text-lg font-bold text-black">{{ game.title }}</h3>
      <!-- <p v-if="game.subtitle" class="text-sm text-gray-600">{{ game.subtitle }}</p> -->
      <div class="mt-4">
        <select
          :value="game.status"
          @change="
            (e: Event) =>
              store.updateGameStatus(game.id, (e.target as HTMLSelectElement).value as GameStatus)
          "
          class="w-full p-2 border rounded bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
