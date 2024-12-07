import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LoginPage from '@/pages/login/ui/LoginPage.vue';
import CitiesPage from '@pages/cities/ui/CitiesPage.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Login', component: LoginPage },
    { path: '/cities', name: 'cities', component: CitiesPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
