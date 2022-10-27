import {createRouter,createWebHistory} from "vue-router/dist/vue-router"


import AdminRouter from "./router/admin";


// const App = createApp(AdminApp).use(accountRouter).mount('#adminApp');

const routes = AdminRouter;

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;
