import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from '@/pages/Page-1.vue';
import Page2 from '@/pages/Page-2.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { path: '/page1', component: Page1, alias: '/' },
        { path: '/page2', component: Page2 }
    ]
});