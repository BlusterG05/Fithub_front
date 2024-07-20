<template>
    <div class="exercise-card">
      <div class="exercise-header">
        <h3 class="exercise-title">{{ exercise.exercise_name }}</h3>
        <span class="exercise-discipline">{{ exercise.exercise_discipline_name }}</span>
      </div>
      <p class="exercise-description">{{ exercise.exercise_description }}</p>
      <div class="exercise-details">
        <div class="detail-item">
          <span class="detail-icon">🏋️</span>
          <span class="detail-text">{{ exercise.exercise_group_name }}</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">🎯</span>
          <span class="detail-text">{{ exercise.exercise_category_name }}</span>
        </div>
      </div>
      <div class="exercise-recommendations">
        <h4 class="recommendations-title">Recomendaciones</h4>
        <p>{{ exercise.exercise_recommendations }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
defineProps({
  exercise: Object
});
</script>

<style scoped>
body {
  font-family: 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

.exercise-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.exercise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.exercise-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.exercise-title {
  font-size: 1.25rem;
  color: #333;
  margin: 0;
  font-weight: 500;
}

.exercise-discipline {
  background-color: #333;
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 400;
}

.exercise-description {
  color: #555;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.exercise-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
}

.detail-text {
  color: #666;
  font-size: 0.9rem;
}

.exercise-recommendations {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 1rem;
}

.recommendations-title {
  font-size: 1rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

@media (max-width: 600px) {
  .exercise-card {
    padding: 1rem;
  }

  .exercise-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .exercise-discipline {
    margin-top: 0.5rem;
  }

  .exercise-details {
    flex-direction: column;
  }

  .detail-item {
    margin-bottom: 0.5rem;
  }
}
</style>