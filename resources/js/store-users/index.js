import { createApp } from 'vue'
import { createStore } from 'vuex'
import getters from './getters'
import userApp from '../UserApp.vue'
// Create a new store instance.

// const modulesFiles = require.context('./modules', true, /\.js$/)
const modulesFiles = import.meta.glob("./modules/*.js");
console.log( modulesFiles[0].name);
console.log( modulesFiles);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = createStore({
    getters,
    modules
})

// const app = createApp({userApp})
//
// // Install the store instance as a plugin
// app.use(store)
export default store
