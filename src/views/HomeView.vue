<script setup lang="ts">
import GameList from '@/components/GameList.vue'
import ReviewList from '@/components/ReviewList.vue'
</script>

<template>
  <main>
    <GameList />
    <ReviewList />
  </main>
</template>

<style scoped>
main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
