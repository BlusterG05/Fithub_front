<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <aside class="sidebar left-sidebar">
        <!-- Contenido del sidebar izquierdo -->
      </aside>
      <main class="content">
        <router-view />
      </main>
      <aside class="sidebar right-sidebar">
        <!-- Contenido del sidebar derecho -->
      </aside>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 1 0 20%;
  padding: 1rem;
  background-color: #f0f0f0;
}

.content {
  flex: 1 0 60%;
  padding: 1rem;
}

footer {
  background-color: #ddd;
  padding: 1rem;
  text-align: center;
}
</style>
