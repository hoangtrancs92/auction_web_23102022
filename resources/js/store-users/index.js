import { createStore } from 'vuex'
import UserModules from './modules/login.js'

const store = createStore({
    modules: {
        user: UserModules
    }
})

export default store
