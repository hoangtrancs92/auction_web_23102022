import UserLogin from "../pages/users/Login.vue";
import UserRegister from "../pages/users/Register.vue";
import UserHome from "../pages/users/homes/Index.vue"

   const routes = [
        {
            path: '/user/login',
            name: 'UserLogin',
            component: UserLogin,
            meta: {
                layout: 'blank',
                user: false
            }
        },
       {
           path: '/user/home',
           name: 'UserHome',
           component: UserHome,
           meta: {
               layout: 'user',
               user: true
           }
       },
       {
           path: '/user/register',
           name: 'UserRegister',
           component: UserRegister,
           meta: {
               layout: 'blank',
               user: false
           }
       }
    ]

export default routes;
