import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router';  // Asegúrate de que la ruta es correcta

const app = createApp(App);

app.use(router);  // Usa el router
app.mount('#app');
