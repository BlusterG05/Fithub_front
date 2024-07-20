<template>
    <div class="exercise-card">
      <h3>{{ exercise.exercise_name }}</h3>
      <p>{{ exercise.exercise_description }}</p>
      <ul>
        <li><strong>Disciplina:</strong> {{ exercise.exercise_discipline_name }}</li>
        <li><strong>Grupo:</strong> {{ exercise.exercise_group_name }}</li>
        <li><strong>Categoría:</strong> {{ exercise.exercise_category_name }}</li>
        <li><strong>Recomendaciones:</strong> {{ exercise.exercise_recommendations }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    exercise: Object
  });
  </script>
  
  <style scoped>
  .exercise-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  </style>
  