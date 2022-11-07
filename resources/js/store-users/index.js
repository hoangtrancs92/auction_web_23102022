import { createStore } from 'vuex'
import LoginModules from './modules/login.js'

const store = createStore({
    modules: {
        login: LoginModules,
    }
})

export default store
