import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './css/global.css';

// Import your components (pages)
import HomePage from './pages/HomePage.vue';
import ContactPage from './pages/ContactPage.vue'; // Assuming you've already created it

// Define the routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage }, // Route for the Contact page
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Create and mount the app
createApp(App)
    .use(router) // Use the router
    .mount('#app');
