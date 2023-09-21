
import { createRouter , createWebHistory } from "vue-router";

import Home from '../components/Home.vue';
import Product from '../components/ProductList.vue';
import DetalsPage from '../components/ProductDetals.vue'
import NotFound from '../components/NotFound.vue'
const routes = [
    {
        path:'/',
        component:Home
    },
    
    {
        path:'/products',
        component:Product,
       
    },
    {
        path:'/products/:id',
        component:DetalsPage
    },
    {
        path:'/:hkjhkj(.*)*',
        component:NotFound
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;