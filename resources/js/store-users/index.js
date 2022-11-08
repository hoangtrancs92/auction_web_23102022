import { createStore } from 'vuex'
import LoginModules from './modules/login.js'
import CustomerModules from './modules/customer.js'

const store = createStore({
    modules: {
        login: LoginModules,
        customer: CustomerModules
    }
})

export default store
