import { createApp } from 'vue'
import { createStore } from 'vuex'
import getters from './getters'
import userApp from '../UserApp.vue'


console.log(getters);
const files = import.meta.globEager("./modules/*.js");

const modules = {};
for (const key in files) {
    modules[key.replace(/(\.\/|\.js)/g, "")] = files[key].default;
}
console.log(modules);


const store = createStore({
    getters,
    modules
})

// const app = createApp({userApp})
//
// // Install the store instance as a plugin
// app.use(store)
export default store
