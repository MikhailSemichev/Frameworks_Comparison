import Vue from 'vue';
import store from './store/index.js';
import router from './router/index.js';
import App from './App.vue';

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});