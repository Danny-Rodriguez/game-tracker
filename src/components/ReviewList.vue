<template>
  <div class="review-list">
    <div class="review-list-header">
      <h2>Latest Reviews</h2>
      <button class="view-all-btn">View all</button>
    </div>
    <div class="reviews">
      <ReviewCard
        v-for="review in latestReviews"
        :key="review.id"
        :review="review"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useReviewStore } from '@/stores/reviews'
import ReviewCard from './ReviewCard.vue'

const reviewStore = useReviewStore()
const latestReviews = reviewStore.getLatestReviews()
</script>

<style scoped>
.review-list {
  margin: 2rem 0;
}

.review-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.view-all-btn {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  font-size: 0.9rem;
}

.view-all-btn:hover {
  color: #fff;
}

.reviews {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
