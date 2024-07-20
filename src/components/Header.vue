<template>
    <header>
      <h1>FITHUB</h1>
      <button @click="logout">Cerrar Sesión</button>
    </header>
  </template>
  
  <script setup lang="ts">
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  }
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #ff4c4c;
  }
  </style>
  