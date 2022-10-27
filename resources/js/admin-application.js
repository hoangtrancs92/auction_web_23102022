
// import AdminApp from './AdminApp.vue';
// import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/saga-blue/theme.css'       //theme
// import 'primevue/resources/primevue.min.css'                 //core css
// import 'primeicons/primeicons.css'
// import Button from "primevue/button";
// import InputText from "primevue/inputtext";
// import PanelMenu from 'primevue/panelmenu';
// import Card from 'primevue/card';
// import Breadcrumb from 'primevue/breadcrumb';
// import accountRouter from "./account-router";
//
//
//
//
// const App = createApp(AdminApp).use(accountRouter).mount('#adminApp');
// // App.use(primevue);
//
// App.component('InputText',InputText);
// App.component('Button',Button);
// App.component('PanelMenu',PanelMenu);
// App.component('Card',Card);
// App.component('Breadcrumb',Breadcrumb);
// export default App;

import './bootstrap';
import {createApp} from 'vue';
// import Vue from 'vue';
import adminApp from "./AdminApp.vue";
import adminRouter from "./admin-router";

const App = createApp(adminApp).use(adminRouter).mount('#adminApp');
// const app = new Vue({
//     el: '#adminApp',
//     render: h => h(adminApp)
// })

export default App;
