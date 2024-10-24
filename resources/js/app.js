import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './css/global.css';

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components: {
        ...components,
        ...labsComponents,
    },
    directives,
})

// Import your components (pages)
import HomePage from './pages/HomePage.vue';
import ContactPage from './pages/ContactPage.vue'; // Assuming you've already created it
import RegisterPage from "./pages/Auth/RegisterPage.vue";
import LoginPage from "./pages/Auth/LoginPage.vue";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordPage.vue";
import ConfirmPasswordPage from "./pages/Auth/ConfirmPasswordPage.vue";
import EmailVerificationPage from "./pages/Auth/EmailVerificationPage.vue";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage.vue";

// Define the routes
const routes = [
    { path: '/', component: HomePage },
    { path: '/register', component: RegisterPage },
    { path: '/login', component: LoginPage },
    { path: '/forgot-password', component: ForgotPasswordPage },
    { path: '/confirm-password', component: ConfirmPasswordPage },
    { path: '/email-verification', component: EmailVerificationPage },
    { path: '/reset-password', component: ResetPasswordPage },
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
    .use(vuetify)
    .mount('#app');
