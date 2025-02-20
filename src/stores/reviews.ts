import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Review } from '@/types/review'
import { INITIAL_REVIEWS } from '@/types/review'

const STORAGE_KEY = 'game-tracker-reviews'

export const useReviewStore = defineStore('reviews', () => {
  const reviews = ref<Review[]>(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(INITIAL_REVIEWS))
  )

  // Save reviews to localStorage whenever they change
  function saveReviews() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews.value))
  }

  function addReview(review: Omit<Review, 'id' | 'timestamp'>) {
    const newReview: Review = {
      ...review,
      id: `review-${Date.now()}`,
      timestamp: new Date().toISOString()
    }
    reviews.value.push(newReview)
    saveReviews()
  }

  function getReviewsByGameId(gameId: string) {
    return reviews.value.filter(review => review.gameId === gameId)
  }

  function getLatestReviews(limit = 5) {
    return [...reviews.value]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, limit)
  }

  return {
    reviews,
    addReview,
    getReviewsByGameId,
    getLatestReviews
  }
})
