import { createApp } from 'vue'
import { createStore } from 'vuex'
import getters from './getters'
// Create a new store instance.

const modulesFiles = require.context('./modules', true, /\.js$/)

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

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)
