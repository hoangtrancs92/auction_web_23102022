import {createApp} from "vue";
import AdminRouter from "./admin-router";
import store from "./store-admins";
import AdminApp from './AdminApp.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme

import 'primeicons/primeicons.css'
import 'prismjs/themes/prism-coy.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.css'

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import PanelMenu from 'primevue/panelmenu';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";

import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';

import AdminLayout from './layouts/Admin.vue';
import BlankLayout from './layouts/Blank.vue';

const app = createApp(AdminApp).use(AdminRouter).use(store).use(PrimeVue);
app.mount('#adminApp');

app.component('admin-layout', AdminLayout);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('PanelMenu', PanelMenu);
app.component('Card', Card);
app.component('Breadcrumb', Breadcrumb);
app.component('Menubar', Menubar);
app.component('Dropdown', Dropdown);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Toolbar', Toolbar);
app.component('Dialog', Dialog);

app.directive('styleclass', StyleClass);
app.directive('ripple', Ripple);
export default app;

