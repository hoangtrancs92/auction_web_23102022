import { createStore } from 'vuex'
import CustomerModules from './modules/customer.js'
import LoginModules from './modules/login.js'

const store = createStore({
  modules: {
      customer: CustomerModules,
      login: LoginModules,
  }
})

export default store
