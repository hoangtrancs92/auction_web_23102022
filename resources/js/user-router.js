import {createRouter,createWebHistory} from "vue-router/dist/vue-router"
import {createApp} from "vue";
import UserRouters from './router/user'


const routes = UserRouters


// Vue.component('user-layout', () => import('../src/layout/User'))
// Vue.component('blank-layout', () => import('../src/layout/Blank'))



const router = createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.user)) {
        if (localStorage.getItem('customer_token') ===   null) {
            router.push('/user/login')
        }
    }
    next()
})
export default router
