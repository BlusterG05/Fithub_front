<template>
  <div v-if="isAuthenticated" class="exercise-grid">
    <ExerciseCard v-for="exercise in exercises" :key="exercise.exercise_id" :exercise="exercise" />
  </div>
  <div v-else>
    <p>No estás autenticado. Por favor, inicia sesión.</p>
    <router-link to="/login">Iniciar Sesión</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ExerciseCard from './ExerciseCard.vue';

interface Exercise {
  exercise_id: string;
  exercise_name: string;
  exercise_discipline_name: string;
  exercise_description: string;
  exercise_group_name: string;
  exercise_category_name: string;
  exercise_recommendations: string;
}

const exercises = ref<Exercise[]>([]);
const isAuthenticated = ref(false);

onMounted(async () => {
  const token = localStorage.getItem('token');
  if (token) {
    isAuthenticated.value = true;
    try {
      const response = await axios.get('/api/exercises/getAll', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      exercises.value = response.data;
    } catch (error: unknown) {
      console.error('Failed to fetch exercises:', error);
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        // Token expired or invalid, log out the user
        localStorage.removeItem('token');
        isAuthenticated.value = false;
      }
    }
  }
});
</script>

<style scoped>
.exercise-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
}
</style>