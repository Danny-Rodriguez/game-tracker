<template>
  <div class="review-card">
    <div class="review-header">
      <div class="game-info" v-if="game">
        <img :src="game.image" :alt="game.title" class="game-image">
        <h3>{{ game.title }}</h3>
      </div>
      <div class="rating">
        <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= review.rating }">★</span>
      </div>
    </div>
    <p class="review-text">{{ review.text }}</p>
    <div class="review-footer">
      <span class="author">{{ review.author }}</span>
      <span class="timestamp">{{ formatDate(review.timestamp) }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Review } from '@/types/review'
import type { Game } from '@/types/game'
import { useGameStore } from '@/stores/games'
import { computed } from 'vue'

const props = defineProps<{
  review: Review
}>()

const gameStore = useGameStore()
const game = computed(() => gameStore.games.find(g => g.id === props.review.gameId))

function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleDateString()
}
</script>

<style scoped>
.review-card {
  background: #1a1f2e;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.game-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.game-image {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: cover;
}

.rating {
  color: #666;
}

.star.filled {
  color: #ffd700;
}

.review-text {
  margin: 0.5rem 0;
  line-height: 1.4;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}
</style>
