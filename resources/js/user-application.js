import './bootstrap';

import {createApp} from "vue";
import UserApp from "./UserApp.vue";
import userRouter from "./user-router";
import store from "./store-users"

const App = createApp(UserApp).use(userRouter,store).mount('#userApp');
// const app = new Vue({
//     el: '#userApp',
//     render: h => h(UserApp)
// })

export default App;
