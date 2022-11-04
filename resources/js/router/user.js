import UserLogin from "../pages/users/Login.vue";
   const routes = [
        {
            path: '/user/login',
            name: 'UserLogin',
            component: UserLogin,
            meta: {
                layout: 'Blank',
                user: false
            }
        },
    ]

export default routes;
