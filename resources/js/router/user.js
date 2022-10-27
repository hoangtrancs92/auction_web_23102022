

import UserLogin from "../pages/users/Login.vue";


   const routes = [
        {
            path: '/user/login',
            name: 'UserLogin',
            component: UserLogin,
            meta: {
                layout: 'user',
                user: false
            }
        },
    ]

export default routes;
