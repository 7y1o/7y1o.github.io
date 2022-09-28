import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './utils/routes';

const app = createApp(App);

// Add plugins
app.use(createRouter({
    history: createWebHashHistory(),
    routes
}));

// Mount
app.mount('#app')
