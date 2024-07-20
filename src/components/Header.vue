<template>
    <header class="header">
      <div class="header-content">
        <h1 class="logo">FITHUB</h1>
        <button @click="logout" class="logout-button">Cerrar Sesión</button>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirige a la página de inicio de sesión
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin: 0;
  }
  
  .logout-button {
    background-color: #333333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .logout-button:hover {
    background-color: #555555;
  }
  
  @media (max-width: 600px) {
    .header-content {
      flex-direction: column;
      align-items: stretch;
    }
  
    .logo {
      margin-bottom: 1rem;
      text-align: center;
    }
  
    .logout-button {
      width: 100%;
    }
  }
  </style>