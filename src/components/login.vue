<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="email" required class="form-input" />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" required class="form-input" />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <div class="divider">
        <span>or</span>
      </div>
      <button @click="handleGoogleLogin" class="google-login-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png?20230822192911" alt="Google icon" class="google-icon" />
        Sign in with Google
      </button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();
    const route = useRoute();

    const login = async (email: string, password: string) => {
      const response = await axios.post('http://localhost:3000/api/admin/login', {
        Mail: email,
        Password: password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
      window.dispatchEvent(new CustomEvent('user-logged-in', { detail: token }));
    };

    const handleLogin = async () => {
      try {
        await login(email.value, password.value);
        router.push('/');
      } catch (err) {
        error.value = 'Invalid email or password';
      }
    };

    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:3000/auth/oauth';
    };

    onMounted(() => {
      // Verificar si hay un token en la URL (después de OAuth)
      const token = route.query.token as string;
      if (token) {
        localStorage.setItem('token', token);
        window.dispatchEvent(new CustomEvent('user-logged-in', { detail: token }));
        router.push('/');
      }
    });

    return {
      email,
      password,
      error,
      handleLogin,
      handleGoogleLogin
    };
  }
});
</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
}

.login-title {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.login-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #555;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider span {
  padding: 0 0.5rem;
  color: #777;
}

.google-login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.google-login-button:hover {
  background-color: #f5f5f5;
}

.google-icon {
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
}

.error-message {
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
}
</style>