import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/home/Home.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home }
    ]
})
export default router