
import { createRouter , createWebHistory } from "vue-router";

import Helloworld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Post from '../components/Post.vue';
import AboutMango from '../components/AboutMango.vue';
import ChildListOne from '../components/ChildListOne.vue';

const routes = [
    {
        path:'/',
        component:Helloworld
    },
    {
        path:'/about',
        component:About,
        children:[
            {
                path:'/AboutMango',
                component:AboutMango
            }
        ]
    },
    {
        path:'/contact',
        component:Contact
    },
    {
        path:'/post/:id',
        component:Post,
        children:[
            {
                path:'/childListOne/:id',
                component:ChildListOne
            }
        ]
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;