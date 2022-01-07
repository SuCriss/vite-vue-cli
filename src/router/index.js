import { createRouter,createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
const routerWebHistory = createWebHistory()
const router = createRouter({
    history:routerWebHistory,
    routes:[
        {
            path:'/',
            component:HelloWorld
        }
    ]
});
export default router;