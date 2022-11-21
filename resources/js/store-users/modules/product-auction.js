import {ApiCaller} from "../../api/api";
import {URLS} from "../../api/url";

export default {
    namespaced: true,
    getters: {
        product_auctions: state => state.product_auctions,
        product_auction: state => state.product_auction,
    },
    state: {
        product_auctions: [],
        product_auction: {},
    },
    mutations: {
        SET_PRODUCT_AUCTIONS(state, payload) {
            state.product_auctions = payload
        },
        SET_PRODUCT_AUCTION(state, payload) {
            state.product_auction = payload
        },
    },
    actions: {
        async fetchProductAuction({commit}) {
            const res = await ApiCaller('customer').get(URLS.CUSTOMER_PRODUCT_AUCTION())
            if(res.status === 200){
                commit('SET_PRODUCT_AUCTIONS', res.data)
            }

        },
        async fetchProductDetail({commit},id) {

            const res = await ApiCaller('customer').get(URLS.CUSTOMER_PRODUCT_DETAIL(id))
            if(res.status === 200){
                commit('SET_PRODUCT_AUCTION', res.data)
            }
        }
    }
}
