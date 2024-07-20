<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();

    const login = async (email: string, password: string) => {
      const response = await axios.post('http://localhost:3000/api/admin/login', {
        Mail: email,
        Password: password
      });
      const token = response.data.token;
      localStorage.setItem('token', token);
    };

    const handleLogin = async () => {
      try {
        await login(email.value, password.value);
        router.push('/');
      } catch (err) {
        error.value = 'Invalid email or password';
      }
    };

    return {
      email,
      password,
      error,
      handleLogin
    };
  }
});
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
}
</style>