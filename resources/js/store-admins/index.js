import { createStore } from 'vuex'
import CustomerModules from './modules/customer.js'

const store = createStore({
  modules: {
      customer: CustomerModules
  }
})

export default store
