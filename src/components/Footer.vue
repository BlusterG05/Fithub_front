<template>
    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2024 FITHUB</p>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  .footer {
    background-color: #f5f5f5;
    border-top: 1px solid #e0e0e0;
    padding: 1rem 0;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .copyright {
    color: #555555;
    font-size: 0.9rem;
    margin: 0;
  }
  
  @media (max-width: 600px) {
    .footer {
      padding: 0.75rem 0;
    }
  
    .copyright {
      font-size: 0.8rem;
    }
  }
  </style>