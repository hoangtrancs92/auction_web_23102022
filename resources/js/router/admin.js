
import AdminLogin from '../pages/admins/Login.vue';

const routes = [
    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: AdminLogin,
        meta: {
            layout: 'admin',
            admin: false
        }
    }
]

export default routes;
