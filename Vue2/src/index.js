import Vue from 'vue';
import router from './router/index.js';
import App from './AppSimple.vue';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});