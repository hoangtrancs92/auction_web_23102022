import {createRouter,createWebHistory} from "vue-router/dist/vue-router"

import UserRouters from './router/user'


const routes = UserRouters


// Vue.component('user-layout', () => import('../src/layout/User'))
// Vue.component('blank-layout', () => import('../src/layout/Blank'))



const router = createRouter({
    history:createWebHistory(),
    routes
})

// router.beforeEach(async (to, from, next) => {
//     window.scrollTo(0, 0)
//     if (to.matched.some(record => record.meta.user && !record.meta.login)) {
//         localStorage.setItem('url', to.path)
//         if (localStorage.getItem(JWT_USER_KEY) == null) {
//             await window.liff.init({ liffId: process.env.LIFF_ID })
//             window.liff.logout()
//             router.push({ path: '/user/categories' })
//         }
//     }
//     next()
// })

export default router
