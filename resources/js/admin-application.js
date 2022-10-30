import {createApp} from "vue";
import AdminApp from './AdminApp.vue';
import PrimeVue from 'primevue/config';
import AdminRouter from "./admin-router";
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import Menubar from 'primevue/menubar';

import AdminLayout from './layouts/Admin.vue';
import BlankLayout from './layouts/Blank.vue';

const app = createApp(AdminApp).use(AdminRouter).use(PrimeVue);
app.mount('#adminApp');

app.component('admin-layout', AdminLayout);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('PanelMenu', PanelMenu);
app.component('Card', Card);
app.component('Breadcrumb', Breadcrumb);
app.component('Menubar', Menubar);

export default app;

