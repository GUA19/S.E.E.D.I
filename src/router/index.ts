import { createRouter, createWebHistory } from 'vue-router'
import CoverPage from '../views/CoverPage.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
    { path: '/', name: 'CoverPage', component: CoverPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
