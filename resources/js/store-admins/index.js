import { createStore } from 'vuex'
import CustomerModules from './modules/customer.js'
import LoginModules from './modules/login.js'
import CategoryModules from './modules/category.js'
import ProductModules from './modules/product.js'
import ShopModules from './modules/shop.js'

const store = createStore({
  modules: {
      customer: CustomerModules,
      login: LoginModules,
      category: CategoryModules,
      product: ProductModules,
      shop: ShopModules
  }
})

export default store
