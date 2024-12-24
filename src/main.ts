import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style/index.css';
import { router, isLoading } from './router/index';
import i18n from './i18n/index';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(i18n);
app.provide('isLoading', isLoading);
app.use(pinia);

app.mount('#app');
