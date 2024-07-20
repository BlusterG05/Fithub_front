<template>
    <div>Procesando autenticación...</div>
  </template>
  
  <script>
  export default {
    name: 'AuthCallback',
    mounted() {
      const token = this.$route.query.token;
      if (token) {
        localStorage.setItem('token', token);
        this.$router.push('/');
      } else {
        this.$router.push('/login');
      }
    }
  }
  </script>