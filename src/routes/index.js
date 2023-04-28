import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Blog = () => import('../views/blog/BlogContainer.vue')
const ContactUs = () => import('../views/contact/ContactUs.vue')
const AboutUs = () => import('../views/about/AboutUsContainer.vue')
const CreateProduct = () => import('../views/product/CreateProduct.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/contactUs', name: 'contactUs', component: ContactUs },
        { path: '/aboutUs', name: 'aboutUs', component: AboutUs },
        { path: '/newProduct', name: 'newProduct', component: CreateProduct }
    ]
})
export default router