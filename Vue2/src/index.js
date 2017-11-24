import Vue from 'vue';
import router from './router/index.js';
import store from './store/index.js';
import App from './App.vue';

const app = new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});