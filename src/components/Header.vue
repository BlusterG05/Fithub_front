<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">FITHUB</h1>
      <div class="user-info" v-if="userInfo">
        <span class="greeting">Hola, {{ userInfo.username }}!</span>
        <span class="email">{{ userInfo.email }}</span>
        <button @click="logout" class="logout-button">Cerrar Sesión</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import jwtDecode from 'jwt-decode';

interface UserInfo {
  username: string;
  email: string;
}

const userInfo = ref<UserInfo | null>(null);

const decodeToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const payload = jwtDecode<UserInfo>(token);
      userInfo.value = {
        username: payload.username,
        email: payload.email
      };
    } catch (error) {
      console.error('Error decodificando el token:', error);
    }
  } else {
    userInfo.value = null;
  }
};

const handleUserLoggedIn = () => {
  decodeToken();
};

onMounted(() => {
  decodeToken();
  window.addEventListener('user-logged-in', handleUserLoggedIn);
});

onUnmounted(() => {
  window.removeEventListener('user-logged-in', handleUserLoggedIn);
});

const logout = () => {
  localStorage.removeItem('token');
  userInfo.value = null;
  window.location.href = '/login';
};
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

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.greeting {
  font-weight: bold;
  color: #333333;
}

.email {
  color: #666666;
  font-size: 0.9rem;
}

.logout-button {
  background-color: #333333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #555555;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .user-info {
    margin-top: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .logout-button {
    margin-top: 0.5rem;
  }
}
</style>