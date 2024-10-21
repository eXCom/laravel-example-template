import './bootstrap';

import { createApp } from 'vue';

import ExampleComponent from './components/ExampleComponent.vue'; // Import your component

const app = createApp({});
app.component('example-component', ExampleComponent); // Register your component
app.mount('#app');
