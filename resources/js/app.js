import './bootstrap';

import { createApp } from 'vue';

import Welcome from './Welcome.vue';
import ExampleComponent from './components/ExampleComponent.vue'; // Import your component

const app = createApp({});
app.component('example-component', ExampleComponent);
app.component('Welcome', Welcome);

app.mount('#app');
