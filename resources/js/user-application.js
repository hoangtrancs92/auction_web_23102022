import './bootstrap';

import {createApp} from 'vue';
import UserApp from "./UserApp.vue";
import userRouter from "./user-router";
import store from "./store-users";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import Card from 'primevue/card';

import UserLayout from './layouts/User.vue'
import BlankLayout from './layouts/Blank.vue'

const app = createApp(UserApp).use(userRouter).use(store).use(PrimeVue);

app.component('user-layout', UserLayout)
app.component('blank-layout', BlankLayout)

app.mount('#userApp');

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Card', Card);



export default app








