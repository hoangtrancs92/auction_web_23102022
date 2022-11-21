import { createStore } from 'vuex'
import LoginModules from './modules/login.js'
import CustomerModules from './modules/customer.js'
import RegisterModules from './modules/register.js'
import ProductAuctionModules from "./modules/product-auction.js"

const store = createStore({
    modules: {
        login: LoginModules,
        customer: CustomerModules,
        register: RegisterModules,
        productAuction: ProductAuctionModules

    }
})

export default store
