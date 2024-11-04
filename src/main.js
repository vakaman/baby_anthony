import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; // Importa o Vuetify configurado
import './styles/main.css';

const app = createApp(App);

app.use(router);
app.use(vuetify); // Usa o Vuetify
app.mount('#app');
